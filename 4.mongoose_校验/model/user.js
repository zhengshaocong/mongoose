//配置数据模型

var mongoose=require('./db.js')

var UserSchema=mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:true//校验 必传项目 不传报错
    },
    age:{
        type:Number,
        min:0,//只能用string类型
        max:150,//只能用string类型
    },
    job:{
        type:Number,
        enum:[0,1,2,3,4,5,6,7]
    },
    op:{
        type:String,
        maxlength:10,
        minlength:5
    },
    cc:{
        type:String,
        match:/^sn(.*)/i
    },
    status:Number,
    va:{
        type:Number,
        validate:function(sn){
            return sn>20
        }
    }
})


module.exports=mongoose.model("User",UserSchema,'user')