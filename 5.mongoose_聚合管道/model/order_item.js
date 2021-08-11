//配置数据模型

var mongoose=require('./db.js')

var NewsSchema=mongoose.Schema({
    order_id:{
        type:Number,
        required:true,
        unique:true
    },
    title:{
        type:String,
        trim:true // 预定义 模式修饰符 去掉空格
    },
    price:Number,
    num:Number
})


module.exports=mongoose.model("OrderItem",NewsSchema,'order_item')