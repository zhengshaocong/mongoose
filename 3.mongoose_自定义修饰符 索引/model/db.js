//链接数据库
var mongoose=require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/egg',{useNewUrlParser:true},(err)=>{
    if(err){
        return console.log(err)
    }else{
        console.log('链接成功························')
    }
})

module.exports=mongoose