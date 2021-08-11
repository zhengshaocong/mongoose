let user=require('./model/user')

let news=require('./model/news')

// // 报错 name 必须传
// let userOne=new user({
//     age:15,
//     status:55
// })

// userOne.save((err,data)=>{
//     if(err){
//         return console.log(err)
//     }else{
//         console.log(data)
//     }
// })


// 报错 age范围必须在0到150
// let userOne=new user({
//     name:'oooo',
//     age:150000,
// })

// userOne.save((err,data)=>{
//     if(err){
//         return console.log(err)
//     }else{
//         console.log(data)
//     }
// })


// // 报错 job必须是设置的enum内的值
// let userOne=new user({
//     name:'oooo',
//     age:10,
//     job:150
// })

// userOne.save((err,data)=>{
//     if(err){
//         return console.log(err)
//     }else{
//         console.log(data)
//     }
// })





// 报错 op的字符长度必须在maxlength和minlength之间
// let userOne=new user({
//     name:'oooo',
//     age:10,
//     op:'111'
// })

// userOne.save((err,data)=>{
//     if(err){
//         return console.log(err)
//     }else{
//         console.log(data)
//     }
// })






// 报错 cc必须满足macth的正则表达式
// let userOne=new user({
//     name:'oooo',
//     age:10,
//     cc:'sn646465',
//     status:13
// })

// userOne.save((err,data)=>{
//     if(err){
//         return console.log(err)
//     }else{
//         console.log(data)
//     }
// })




// 报错 va的必须满足自定义校验 validate的
// let userOne=new user({
//     name:'oooo',
//     age:10,
//     va:10,
//     status:50
// })

// userOne.save((err,data)=>{
//     if(err){
//         return console.log(err)
//     }else{
//         console.log(data)
//     }
// })