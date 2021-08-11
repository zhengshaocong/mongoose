const mongoose=require("mongoose")
 //链接mongodb库
mongoose.connect('mongodb://127.0.0.1:27017/egg')

//操作表/集合


// 数据库对象的集合 没有操作数据库表的能力
// 注意 集合参数可以不传，若有默认则记录默认值，集合未定义的参数 传递进去后不会记录
var UsersSchema=mongoose.Schema({
    name:String,
    age:Number,
    status:{
        type:Number,
        default:1
    }
})

//定义数据库模型
// 参数1 的规则 1 若表的名称为复数单词 比如users 则可以使用user 2直接使用表名称 3 表名称可以为大写
// 参数2 为集合
// 参数3 表的名称，有参数3时以参数3为准，比如有两张表 list lists 这个时候参数1无论穿这两的那一个结果都是lists 若有参数3的值为list时 则可以获取该表
var User=mongoose.model("user",UsersSchema)

// User.find({},(err,doc)=>{

//     if(err){
//         console.log(err)
//         return 
//     }
//     console.log(doc)
// })


// // 新增数据 
// var u=new User({
//     name:'李四',
//     age:20,
//     status:1
// })

// u.save(function(err,data){
//     if(err){
//         console.log(err)
//     }else{
//       console.log(data,'成功')
//     }
// })



// 更新数据 
// User.find({},(err,doc)=>{

//     if(err){
//         console.log(err)
//         return 
//     }
//     console.log(doc)
// })