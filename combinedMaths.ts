import {round,sum, head, last, mean, min,max, multiply, divide, subtract, compact, } from 'lodash';

export function calculate (colRefs:number[], operation:string, precision:number){
  switch(operation){
    case 'sum':
      return round(sum(colRefs), precision);
    case 'average':
      return round(mean(colRefs), precision);
    case 'numeric_min':
      const minimum = min(colRefs)
      return minimum == undefined?NaN:round(minimum,precision)
    case 'numeric_max':
      const maximum = max(colRefs)
      return maximum == undefined?NaN:round(maximum,precision)
    case 'numeric_first':
      const headE = head(colRefs)
      return headE==undefined?NaN:round(headE, precision);
    case 'numeric_last':
      const lastE = last(colRefs)
      return lastE==undefined?NaN:round(lastE, precision);
    case 'numeric_multiply':
      return round(colRefs.reduce((acc, curr)=> multiply(acc, curr)), precision);
    case 'numeric_divide':
      return round(colRefs.reduce((acc, curr)=> divide(acc, curr)), precision);
    case 'numeric_delta':
      return round((colRefs.reduce((acc,curr)=> subtract(acc,curr))), precision);
    case 'string_list':
      return compact(colRefs).toString();
    case 'string_first':
      return head(compact(colRefs));
    case 'string_last':
      return last(compact(colRefs));
} };

const emptyTest = []
const undefinedTest = undefined
const nullTest = null

