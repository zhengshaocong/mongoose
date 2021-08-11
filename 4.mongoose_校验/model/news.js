//配置数据模型

var mongoose=require('./db.js')

var NewsSchema=mongoose.Schema({
    title:{
        type:String,
        trim:true // 预定义 模式修饰符 去掉空格
    },
    author:String,
    pic:String,
    status:{
        type:Number,
        default:1
    }
})


module.exports=mongoose.model("News",NewsSchema,'news')