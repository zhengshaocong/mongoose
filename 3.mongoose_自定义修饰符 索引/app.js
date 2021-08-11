

let news=require('./model/news_自定义修饰符')
let user=require('./model/user_索引')
let list=require('./model/lists_扩展静态方法')


// user.find({},(err,data)=>{
//     if(err){
//         return console.log(err)
//     }else{
//         console.log(data)
//     }
// })

// news.find({},(err,data)=>{
//     if(err){
//         return console.log(err)
//     }else{
//         console.log(data)
//     }
// })

// let newsOne=new news({
//     title:'    测试465465654         ',
//     author:'dadasd     ',
//     pic:'    asdasdad1111  000 000',
//     status:1
// })

// newsOne.save((err,data)=>{
//     if(err){
//         return console.log(err)
//     }else{
//         console.log(data)
//     }
// })


let listOne=new list({
    name:'老王',
    age:15,
    status:0
})

// listOne.save((err,data)=>{
//     if(err){
//         return console.log(err)
//     }else{
//         console.log(data)
//     }
// })

listOne.aaa()

// list.findByName('老王',(err,data)=>{
//     if(err){
//         return console.log(err)
//     }else{
//         console.log(data)
//     }
// })