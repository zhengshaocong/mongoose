//配置数据模型

var mongoose=require('./db.js')

//使用getter 和 setter 自定义

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
    },
    hot:{
        type:Number,
        default:10,
        set(params){//在设置的时候执行
            if(params*1){
                return params*10
            }else{
                return 0
            }
        },
        get(params){// 获取触发 但是不是在获取数据时触发 而是在获取由数据模型创建的数据获取时触发
            return params+"getter格式化"
        }
    }
})

let News=mongoose.model("News",NewsSchema,'news')
let aaa=new News({
   title:'sasdasd',
   hot:10
}) 

console.log('___________________________',aaa.hot)//这个时候获取的aaa.hot的值为100getter格式化

module.exports=News