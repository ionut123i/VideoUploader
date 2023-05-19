const mongoose=require('mongoose')

exports.dbConnection=async()=>{
    mongoose.set('strictQuery')
    await mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
       console.log("DB CONNECTED") 
    }).catch((err)=>{
        console.log(err)
    })
}