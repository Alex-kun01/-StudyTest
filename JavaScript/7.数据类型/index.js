// 数据类型 
// * 原始值：string number boolean undefined null
// * 引用值：object function array

// 六个能转换成false的值： 0、undefined、false、null、NaN、""

// typeof : 检测数据类型
//typeof 的六种返回值 number string boolean object function undefined

console.log("NaN的数据类型:", typeof NaN)
console.log("null的数据类型:", typeof null)
console.log("onclick的数据类型:", typeof onclick)


// instanceof ： 检测原型 判断一个变量是否是某个对象的实例
function fun() {}

console.log("判断[]是不是Array的实例:", [] instanceof Array)
console.log("判断null是不是Array的实例:", null instanceof Array)
console.log("判断[]是不是Object的实例:", [] instanceof Array)
console.log("判断NaN是不是Object的实例:", NaN instanceof Object)
console.log("判断NaN是不是Array的实例:", NaN instanceof Array)
console.log("判断NaN是不是Function的实例:", NaN instanceof Function)
console.log("判断NaN是不是Number的实例:", NaN instanceof Number)
console.log("判断123是不是Number的实例:", 123 instanceof Number)
console.log("判断123是不是Array的实例:", 123 instanceof Array)
console.log("判断123是不是Object的实例:", 123 instanceof Object)
console.log("判断123是不是Function的实例:", 123 instanceof Function)
console.log("判断new Number()是不是Number的实例:", new Number(123) instanceof Number)
console.log("判断fun是不是Object的实例:", fun instanceof Object)
console.log("判断fun是不是Object的实例:", fun instanceof Array)
console.log("判断fun是不是Function的实例:", fun instanceof Function)

// 判断一个变量是不是数组 
// Array.isArray( 变量 )

console.log('判断一个变量是不是数组：', Array.isArray([]))

// 判断一个变量是不是对象

console.log("判断一个变量是不是对象：", typeof {} == 'object')

// 判断对象是否为空

let aaa = {}
    // 方法一：
console.log("使用Object.keys判断对象是否为空：", Object.keys(aaa).length === 0)
    // 方法二：
console.log('使用JSON.stringify判断对象是否为空：', JSON.stringify(aaa) === "{}")


// 比较运算符 注意点

console.log('null >= 0', null >= 0)
console.log('null == 0', null == 0)
console.log('null == undefined：', null == undefined)
console.log('null === undefined：', null === undefined)
console.log('undefined >= 0 ：', undefined >= 0)
console.log('undefined转换成number类型：', +undefined)
console.log('null转换成number类型：', +null)
console.log('Infinity === Infinity + 1：', Infinity === Infinity + 1)