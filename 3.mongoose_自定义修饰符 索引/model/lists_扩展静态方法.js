//配置数据模型

var mongoose=require('./db.js')

var ListSchema=mongoose.Schema({
    name:String,
    age:{
        type:Number,
    },
    status:{
        type:Number,
        default:1,
    }
})

//扩展静态方法
ListSchema.statics.findByName=function(name,cb){
    //这里的this可以获取到model
    this.find({name:name},function(err,data){
        cb(err,data)
    })
}

//扩展实例方法
ListSchema.methods.aaa=function(){
    console.log('------------aaa')
    console.log(this)
}

module.exports=mongoose.model("List",ListSchema,'list')