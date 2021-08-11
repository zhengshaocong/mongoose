//配置数据模型

var mongoose=require('./db.js')

var UserSchema=mongoose.Schema({
    name:String,
    age:{
        type:Number,
        index:true//设置索引
    },
    status:{
        type:Number,
        default:1,
        unique:true//设置唯一索引
    }
})


module.exports=mongoose.model("User",UserSchema,'user')