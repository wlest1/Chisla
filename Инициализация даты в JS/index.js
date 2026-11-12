//let today = new Date((24 * 3600 * 1000) * 14522)
let today = new Date()
console.log(today);

console.log(today.getDate());//число
console.log(today.getDay());// день
console.log(today.getFullYear())//год
console.log(today.getHours())//часов
console.log(today.getMilliseconds())//милисекунд
console.log(today.getMinutes())//минуты
console.log(today.getMonth())//месяц
console.log(today.getSeconds())//секунды
console.log(today.getTime())//все милисекунды
console.log(today.getTimezoneOffset())//смещение пояса
console.log(today.getUTCDate())
console.log(today.getUTCDay())
console.log(today.getUTCFullYear())
console.log(today.getUTCHours())
console.log(today.getUTCMilliseconds())
console.log(today.getUTCMinutes())
console.log(today.getUTCMonth())
console.log(today.getUTCSeconds())
today.setDate(23)
console.log(today);
today.setUTCFullYear(2032)// изменил год на 2032
console.log(today);
today.setHours(23) //час на 23 
console.log(today);
today.getMilliseconds(543) // милисек на 543
console.log(today);




