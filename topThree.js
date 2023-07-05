/*
Write a function that, given a string of text (possibly with punctuation and line-breaks), returns an array of the top-3 most occurring words, in descending order of the number of occurrences.
Assumptions:

    A word is a string of letters (A to Z) optionally containing one or more apostrophes (') in ASCII.
    Apostrophes can appear at the start, middle or end of a word ('abc, abc', 'abc', ab'c are all valid)
    Any other characters (e.g. #, \, / , . ...) are not part of a word and should be treated as whitespace.
    Matches should be case-insensitive, and the words in the result should be lowercased.
    Ties may be broken arbitrarily.
    If a text contains fewer than three unique words, then either the top-2 or top-1 words should be returned, or an empty array if a text contains no words.

*/

/*First solution*/

function topThreeWords(text) {
  const countWords = new Map();
  const topThree = new Array();
  const regEx = new RegExp("\\b[a-zA-Z]+('[a-zA-Z]+)?\\b", "g");
  const words = text.toLocaleLowerCase().trim().match(regEx);
  if (words == null) return [];
  words.forEach((word) => {
    const count = words.filter((x) => x == word).length;
    if (!countWords.has(word)) {
      countWords.set(word, count);
    }
  });
  const iterator1 = countWords[Symbol.iterator]();
  for (const item of iterator1) {
    topThree.push(item);
  }
  topThree.sort(compareFn)

  return topThree.slice(0, 3).map((x) => x[0]);
}

function compareFn(a, b) {
  if (a[1] < b[1]) {
    return 1;
  }
  if (a[1] > b[1]) {
    return -1;
  }
  return 0;
}


//Second Solution
