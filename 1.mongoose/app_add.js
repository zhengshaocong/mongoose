const mongoose=require("mongoose")

//建立连结
mongoose.connect('mongodb://127.0.0.1:27017/egg',{useNewUrlParser:true},(err)=>{
    if(err){
        return console.log('连结失败')
    }else{
        console.log('链接成功--------------')
    }
})

//定义schema

var NewSchema=mongoose.Schema({
    title:String,
    author:String,
    pic:String,
    status:'number'
})


//d\定义操作库数据的model

var News=mongoose.model('News',NewSchema,'news')

var news=new News({
    title:"77777777777777777777777",
    author:'zsc',
    oo:1212
})

news.save((err,data)=>{
    if(err){
        console.log(err)
    }else{
        console.log(data)
    }
})
