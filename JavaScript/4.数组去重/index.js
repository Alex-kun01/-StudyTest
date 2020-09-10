let arr = [1, '1', true, 'true', true, false, 'false', undefined, undefined, undefined, 'undefined', null, null, NaN, NaN, 'NaN', 0, 0, 0, {}, {}, {},
    [],
    [],
    []
]

//一，利用对象的属性不能相同的特点进行数组排重
// 该方法存在问题，1 ‘1’ 被合并了

function removalOne(arr) {
    if (!Array.isArray(arr)) {
        return arr
    }
    let temp = {}
    let newArr = []
    arr.forEach(item => {
        // temp内不存在这个属性
        if (!temp[item]) {
            temp[item] = 1
            newArr.push(item)
        } else {
            temp[item]++
        }
    })
    return newArr
}

// 非常好用的数组去重方法
function removalTwo(arr) {
    if (!Array.isArray(arr)) {
        return arr
    }
    let newArr = []
    arr.forEach(item => {
        if (!newArr.includes(item)) {
            newArr.push(item)
        }
    })
    return newArr
}

// 利用se6 set去重
function removalSet(arr) {
    if (!Array.isArray(arr)) {
        return arr
    }
    return Array.from(new Set(arr))
}