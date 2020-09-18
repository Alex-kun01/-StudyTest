const obj = {
    name: '梅伟',
    age: 60,
    girlFriends: ['girl1', 'girl2', 'girl3', 'girl4', { gitl5: 000 }],
    isMenber: true
}
window.obj = obj

///////////////////////////////////////////////// 浅克隆

// ES6 Object.assign 对象合并
const obj1 = {}
Object.assign(obj1, obj)
console.log('Object.assign克隆：', obj1)

// 展开运算符
const obj2 = {...obj }
console.log('展开运算符克隆：', obj2)


////////////////////////////////////////////////// 深克隆

// 将对象转换成JSON串，然后再转换成对象

let obj3 = null;

function transformation(obj) {
    if (!obj instanceof Object) {
        return obj
    }
    obj3 = JSON.parse(JSON.stringify(obj))
}
transformation(obj)

console.log('利用JSON转换实现深克隆：', obj3)

// 手写深克隆 对象 递归
// 原理：使用递归
function writeClone(data) {
    let obj = undefined
    if (data instanceof Array) {
        obj = []
        for (var i = 0; i <= data.length; i++) {
            obj.push(writeClone(data[i]))
        }
    } else if (data instanceof Object) {
        obj = {}
        for (option in data) {
            obj[option] = writeClone(data[option])
        }
    } else {
        return data
    }
    return obj
}

let obj6 = writeClone(obj);
console.log("使用手写递归克隆：", obj6)

// loadsh深克隆
const _ = require('loadsh');

const obj7 = _.cloneDeep(obj)
window.obj7 = obj7
console.log('使用loadsh深克隆', obj7)