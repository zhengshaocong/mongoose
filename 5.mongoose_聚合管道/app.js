
let order=require('./model/order')

// let order_item=require('./model/order_item')

// //查询
// order.find({},(err,data)=>{
//     if(err) return console.log(err)
//     else console.log(data)
// })

// $match:聚合管道检索
// order.aggregate([{$match:{all_num:14}}],(err,data)=>{
//     console.log(data)
// })

// // $project: 类似与array里的map  筛选并只获取部分值
// order.aggregate([{$project:{all_num:1}}],(err,data)=>{
//     console.log(data)
// })


//$sort:排序
// order.aggregate([{$match:{all_num:{$gt:0}}},{$sort:{num:1}}],(err,data)=>{
//     console.log(data)
// })


//$limit:10 获取前10个 $skip:2 忽略掉前两个 
// order.aggregate([{$match:{all_num:{$gt:0}}},{$skip:1},{$limit:2}],(err,data)=>{
//     console.log(data)
// })


//$group:10 根据某些参数为准 计算另一个参数的和 比如 获取所有order_id相同的对象的all_num值的和
// order_item.aggregate([{$group:{_id:{'order_id':'$order_id',title:"$title"},total:{$sum:"$num"}}}],(err,data)=>{
//     console.log(data)
// })


//$lookup 关联两个表之间的内容

order.aggregate([{$lookup:{
    from:'order_item',
    localField:'order_id',
    foreignField:'order_id',
    as:"item"
}}],(err,data)=>{
    console.log(data)
})