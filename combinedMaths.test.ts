import {describe, expect, test, it} from 'vitest'
import { calculate } from './combinedMaths'

const emptyArray:number[] = []
const zeroElementArray = [0]
const zeroHeadArray = [0,1]
const zeroTailArray = [1,0]
const singleElementArray = [2]
const positiveArray = [1,2,3,4]
const negativeArray = [-1,-2,-3,-4]
const positiveIntegerArray = [-4,2,1,5]
const negativeIntegerArray = [2,1,-4]




describe('calculate with emptyArray', ()=>{
it('test sum with empty array', ()=>{
 expect(calculate(emptyArray, 'sum', 2)).toBe(0)
})

it('test average with empty array', ()=>{
  expect(calculate(emptyArray, 'average', 2)).toBe(0)
 })

 it('test numeric_min with empty array', ()=>{
  expect(calculate(emptyArray, 'numeric_min', 2)).toBe(0)
 })
 it('test numeric_max with empty array', ()=>{
  expect(calculate(emptyArray, 'numeric_max', 2)).toBe(0)
 })
 it('test numeric_first with empty array', ()=>{
  expect(calculate(emptyArray, 'numeric_first', 2)).toBe(0)
 })
 it('test numeric_last with empty array', ()=>{
  expect(calculate(emptyArray, 'numeric_last', 2)).toBe(0)
 })
 it('test numeric_multiply with empty array', ()=>{
  expect(calculate(emptyArray, 'numeric_multiply', 2)).toBe(0)
 })

 it('test numeric_divide with empty array', ()=>{
  expect(calculate(emptyArray, 'numeric_divide', 2)).toBe(0)
 })

 it('test numeric_delta with empty array', ()=>{
  expect(calculate(emptyArray, 'numeric_delta', 2)).toBe(0)
 })
})

describe('calculate with zeroElementArray', ()=> {
  it('test sum with empty array', ()=>{
    expect(calculate(emptyArray, 'sum', 2)).toBe(0)
   })
   
   it('test average with empty array', ()=>{
     expect(calculate(emptyArray, 'average', 2)).toBe(0)
    })
   
    it('test numeric_min with empty array', ()=>{
     expect(calculate(emptyArray, 'numeric_min', 2)).toBe(0)
    })
    it('test numeric_max with empty array', ()=>{
     expect(calculate(emptyArray, 'numeric_max', 2)).toBe(0)
    })
    it('test numeric_first with empty array', ()=>{
     expect(calculate(emptyArray, 'numeric_first', 2)).toBe(0)
    })
    it('test numeric_last with empty array', ()=>{
     expect(calculate(emptyArray, 'numeric_last', 2)).toBe(0)
    })
    it('test numeric_multiply with empty array', ()=>{
     expect(calculate(emptyArray, 'numeric_multiply', 2)).toBe(0)
    })
   
    it('test numeric_divide with empty array', ()=>{
     expect(calculate(emptyArray, 'numeric_divide', 2)).toBe(0)
    })
   
    it('test numeric_delta with empty array', ()=>{
     expect(calculate(emptyArray, 'numeric_delta', 2)).toBe(0)
    })
})
