//配置数据模型

var mongoose=require('./db.js')

var NewsSchema=mongoose.Schema({
    order_id:{
        type:Number,
        required:true,
        unique:true
    },
    uuid:{
        type:Number,
        required:true
    },
    trade_no:{
        type:String,
        required:true
    },
    all_price:{
        type:Number,
        default:100
    },
    all_num:{
        type:Number,
        default:10
    }
})


module.exports=mongoose.model("Order",NewsSchema,'order')