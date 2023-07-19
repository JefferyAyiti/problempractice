function Dictionary(words) {
  this.words = words;
}

Dictionary.prototype.findMostSimilar = function (term) {
  const scores = this.words.map((w) => levDist(w, term));
  const min = Math.min(...scores);
  const index = scores.indexOf(min);
  return this.words[index];
};

function levDist(s_word, t_word) {
  let s = s_word.split("");
  let t = t_word.split("");

  const m = s.length;
  const n = t.length;

  let v = new Array(n + 1);
  let w = new Array(n + 1);

  for (let i = 0; i <= n; i++) {
    v[i] = i;
  }
  for (let i = 0; i < m; i++) {
    w[0] = i + 1;
    for (let j = 0; j < n; j++) {
      let deletionCost = v[j + 1] + 1;
      let insertionCost = w[j] + 1;
      let substitutionCost = 0;

      if (s[i] == t[j]) {
        substitutionCost = v[j];
      } else {
        substitutionCost = v[j] + 1;
      }
      w[j + 1] = Math.min(deletionCost, insertionCost, substitutionCost);
    }
    let temp = v;
    v = w;
    w = temp;
  }
  return v[n];
}
