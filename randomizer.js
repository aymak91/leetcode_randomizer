import { arrays } from "./problems/00_arrays_and_hashing.js"
import { twoPointers } from "./problems/01_two_pointers.js"
import { stack } from "./problems/03_stack.js"
import { slidingWindow } from "./problems/02_sliding_window.js"
import { binarySearch } from "./problems/04_binary_search.js"
import { greedy } from "./problems/14_greedy.js"
import { linkedList } from "./problems/05_linked_list.js"
import { trees } from "./problems/06_trees.js"
import { heaps } from "./problems/08_heaps.js"
import { backtracking } from "./problems/09_backtracking.js"
import { graphs } from "./problems/10_graphs.js"
import { advGraphs } from "./problems/11_advanced_graphs.js"
import { dp1 } from "./problems/12_1d_dynamic_programming.js"
import { dp2 } from "./problems/13_2d_dynamic_programming.js"
import { intervals } from "./problems/15_intervals.js"
import { math } from "./problems/16_math_and_geometry.js"
import { bitManipulation } from "./problems/17_bit_manipulation.js"

const problemList = [
    ...arrays,
    ...twoPointers,
    ...slidingWindow,
    ...stack,
    ...binarySearch,
    ...greedy,
    ...linkedList,
    ...trees,
    ...heaps,
    ...backtracking,
    ...graphs,
    ...advGraphs,
    ...dp1,
    ...dp2,
    ...intervals,
    ...math,
    ...bitManipulation
]

// Difficulties
// 1 -> easy
// 2 -> medium
// 3 -> hard

const filteredList = problemList.filter(problem => {
    return (
        (problem["done?"] == false) 
        && (problem['difficulty'] <= 3) 
        && (problem['premium?'] == false))
    })

const random = Math.floor(Math.random()*filteredList.length)

console.log(random, filteredList[random])