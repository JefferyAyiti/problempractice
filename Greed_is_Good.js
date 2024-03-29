/* Greed is a dice game played with five six-sided dice. 
Your mission, should you choose to accept it, is to score a throw according to these rules. 
You will always be given an array with five six-sided dice values.

 Three 1's => 1000 points
 Three 6's =>  600 points
 Three 5's =>  500 points
 Three 4's =>  400 points
 Three 3's =>  300 points
 Three 2's =>  200 points
 One   1   =>  100 points
 One   5   =>   50 point

A single die can only be counted once in each roll. 
For example, a given "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.
*/
//=============== My Solution ================
function rules(single){
  const len = single.length
  if(single.includes(1)){
    if(len < 3){
      return 100*len
    } else{
      return 1000+rules(single.slice(3))
    }
  }
  else if(single.includes(5)){
    if(len < 3){
    return 50*len  
    }
    else{
    return 500+rules(single.slice(3))  
    } 
  } else if(len >= 3){
    return single[0]*100
  }
  return 0
}

function score( dice ) {
  const nums = [1,2,3,4,5,6]
  const record = []
  
  nums.forEach(n => record.push(dice.filter(d=> d==n)))
  
  const nonEmpty = record.filter( r=> r.length > 0)
  
  const result = nonEmpty.reduce((acc,val) => acc + rules(val),0)
  return result
}

