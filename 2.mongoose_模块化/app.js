let user=require('./model/user')

let news=require('./model/news')

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

let newsOne=new news({
    title:'    测试465465654         ',
    author:'dadasd     ',
    pic:'    asdasdad1111  000 000',
    status:1
})

newsOne.save((err,data)=>{
    if(err){
        return console.log(err)
    }else{
        console.log(data)
    }
})