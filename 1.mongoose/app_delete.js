const mongoose=require("mongoose")

//建立连结
mongoose.connect('mongodb://127.0.0.1:27017/egg')

//定义schema

var NewSchema=mongoose.Schema({
    title:String,
    author:String,
    pic:String,
    status:Number
})


//d\定义操作库数据的model

var News=mongoose.model('News',NewSchema,'news')


//删除数据

News.deleteOne({title:'新闻12'},(err,data)=>{
    if(err){
        return console.log(err)
    }else{
        console.log(data,'成功--------------------')
    }
})