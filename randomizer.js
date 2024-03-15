import { arrays } from "./problems/00_arrays_and_hashing.js"
import { twoPointers } from "./problems/01_two_pointers.js"
import { stack } from "./problems/03_stack.js"
import { slidingWindow } from "./problems/02_sliding_window.js"
import { binarySearch } from "./problems/04_binary_search.js"
import { greedy } from "./problems/13_greedy.js"

const problemList = [
    ...arrays,
    ...twoPointers,
    ...slidingWindow,
    ...stack,
    ...binarySearch,
    ...greedy
]

// Difficulties
// 1 -> easy
// 2 -> medium
// 3 -> hard

const filteredList = problemList.filter(problem => {
    (problem["done?"] == false) 
    && (problem['difficulty'] <= 3) 
    && (problem['premium?']) == false
    })

const random = Math.floor(Math.random()*filteredList.length)

console.log(random, filteredList[random])