// 把Date当成函数直接调用，忽略所有参数，直接返回当前时间的字符串
console.log('Date()直接当成函数调用', Date())

// 创建日期对象 new Date()  
// 1.不传递参数 得到当前时间的字符串
console.log('new Date()不传递参数', new Date())

// 2.一个参数，参数为数字，表示传入的是时间戳，返回1970-1-1到这个时间戳的日期字符串
console.log('传一个参数1000，表示1970-1-1一千毫秒后的日期', new Date(1000))

// 3.两个参数以上，分别表示：年、月、日、时、分、秒、毫秒，如果缺失参数，日期部分默认为1，时分秒毫秒默认为0
// 注意：月份的数字从0开始计算。
console.log('获取2012年1月1号12点的日期字符串', new Date(2012, 0, 1, 12))

////////////// 实例成员 ////////////
const date = new Date()

// getDate() 获取号数
console.log('查看今天几号', date.getDate())
    // getDay() （0-6），获取星期, 0:星期日，1：星期一，2：星期二，3：星期三，4：星期四，5：星期五，6：星期六
console.log('查看今天星期几', date.getDay())
    // getFullYear() 获取年份
console.log('查看今年年份', date.getFullYear())
    // getMonth() 获取月份 （0-11）0:一月，1:二月 .... 11：十二月
console.log('查看现在的月份', date.getMonth() + 1)
    // getHours() 获取小时数
console.log('查看现在的小时数', date.getHours())
    // getMinutes() 获取现在的分钟数
console.log('查看现在的分钟数', date.getMinutes())
    // getMilliseconds() 获取毫秒数
console.log('查看现在的毫秒数', date.getMilliseconds())


//////////////  转换  //////////////
// toDateString() 将日期部分转换成可读的字符串
console.log('将日期部分转换成可读的字符串', date.toDateString())
    // toLocaleDateString() 将日期部分转换成当前操作系统可读的日期字符串
console.log('转换日期部分为当前操作系统可读的字符串', date.toLocaleDateString())
    // toLocaleString() 将整个日期对象时间部分转换成当前操作系统可读的字符串
console.log('转换整个日期对象时间部分为当前操作系统可读的字符串', date.toLocaleString())
    // valueOf() 

// 日期函数封装

// 封装 符合中国人的时间格式函数
// 传入一个时间戳，返回想要的格式： 年-月-日 时：分：秒
function getDateString(date) {
    const year = date.getFullYear().toString().padStart(4, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0")
    const day = date.getDay().toString().padStart(2, "0")
    const hour = date.getHours().toString().padStart(2, "0")
    const minute = date.getMinutes().toString().padStart(2, "0")
    const second = date.getSeconds().toString().padStart(2, "0")
    return `${year}-${month}-${day} ${hour}:${minute}:${second}`
}
console.log('自己封装的获取日期时间的函数', getDateString(new Date()))

// 给定用户的生日，（年，月，日），计算该用户的年龄
// 传入出生日期，返回年龄
function getAge(birthday) {
    const nowDate = new Date()
    const x = nowDate - birthday
    const age = (x / (365 * 24 * 60 * 60 * 1000))
    return Math.floor(age)
}
console.log('查看年龄:', getAge(new Date(1997, 2, 11)))

// 根据系统当前月份，输出这一个月每一天的星期
// 2020年9月1日：星期二
// 2020年9月2日：星期三
// ...
// 2020年9月30日：星期日

function getDateAndDay() {
    const date = new Date()
    const year = date.getFullYear().toString().padStart(4, "0")
    const month = date.getMonth().toString().padStart(2, "0")
    const days = new Date(year, month, 0).getDate()
    for (let i = 1; i <= days; i++) {
        date.setDate(i)
        console.log(`${year}年${month}月${i.toString().padStart(2,"0")}日 星期${'日一二三四五六'.charAt(date.getDay())}`)
    }
}
getDateAndDay()