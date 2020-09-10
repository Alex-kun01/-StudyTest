// 匹配手机号码
// 手机号：第一个数字为1 第二个为[3|5|6|7|8|9] +任意9位数字
function regMobile(mobile) {
    const reg = /^1[3|5|6|7|8|9]\d{9}$/;
    return reg.test(mobile)
}

// 匹配邮箱 
// 邮箱条件：字母/数字4到15位 + @ + 字母 .com
function regEmail(email) {
    const reg = new RegExp("^[A-Za-z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$");
    return reg.test(email);
}

// 匹配密码强度
// 密码条件：大写+小写+数字的组合，长度不得低于8位
function regPassword(password) {
    const reg = new RegExp("(?![a-z]+$|[0-9]+$)^[a-zA-Z0-9]{7,}$");
    return reg.test(password)
}