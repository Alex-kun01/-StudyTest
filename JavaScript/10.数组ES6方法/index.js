let arr = [1, 2, 3, 4, 5, 6]

/////////////////////////////改变原数组///////////////////////////////
// push 往数组最后一位添加数据
arr.push('push')
console.log('push方法执行:', arr)

// pop 把数组最后一位删除掉，只能操作一位
arr.pop()
console.log('pop方法执行:', arr)

// unshift 往数组第一位添加数据 
arr.unshift('unshift')
console.log('unshift方法执行:', arr)

// shift 把数组的第一位删除掉
arr.shift()
console.log('shift方法执行:', arr)

// reverse 将数组逆转
arr.reverse()
console.log('reverse方法执行:', arr)

// splice 截取数组指定的下标
arr.splice(0, 1)
console.log('splice(0, 1)方法执行:', arr)

// sort 数组排序 
arr.sort((a, b) => a - b)
console.log('sort方法执行:', arr)

// 乱序
arr.sort((a, b) => {
    const x = Math.random() * 10
    return a - x;
})
console.log('sort乱序执行:', arr)



/////////////////////////////不改变原数组///////////////////////////////
let arr1 = [7, 8, 9, 10]
    // concat 数组拼接
const arr2 = arr.concat(arr1)
console.log("concat执行:", arr2)

// slice 数组截取
const arr3 = arr.slice(0, 1)
console.log("slice执行 - 原数组arr", arr)
console.log("slice执行 - 新数组arr", arr3)

// jion 将数组的值串联起来
const arrStr = arr.join('$~')
console.log('join执行-用$~连接数组', arrStr)

// includes 查找数组中是否存在某个值
console.log('includes执行-查询数组中是否有90', arr.includes(90))

// Array.every 如果数组中每个元素都满足条件返回true 反之 false
console.log('Array.every执行：', arr.every(item => item > 0))

// Array.some 数组中有一个满足条件就返回true 都不满足就返回false
console.log('Array.some执行：', arr.some(item => item == 4))

// Array.filter 过滤数组中不满足条件的元素 将满足条件的元素返回一个新的数组
const fliterArr = arr.filter(item => item >= 3)
console.log('过滤数组中小于3的', fliterArr)

// Array.findIndex 找到数组中满足条件的元素并返回该元素的索引，如果没有返回-1
console.log('Array.findIndex执行：', arr.findIndex(item => item == 4))

// Array.find 找到数组中满足条件的元素并返回该元素，如果没有返回undefined
console.log('Array.find执行', arr.find(item => item == 4))

// Array.reduce 将数组里面的值拼接起来 可做累加器
const reduceNum = arr.reduce((total, item) => {
    return total + item;
})
console.log('Array.reduce执行：', reduceNum)

// Array.map 将数组每一项遍历，可以对每项进行操作，且不会影响原数组，返回一个新数组
const mapArr = arr.map(item => item + 1)
console.log('arr原数组', arr)
console.log('Array.map执行 - 给arr每一项加1', mapArr)

// Array.forEach 将数组每一项遍历 返回值为undefined
arr.forEach(item => {
    item = item + 3
})
console.log('forEach执行', arr)