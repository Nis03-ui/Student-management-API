const app=require("./app")

PORT=process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log(`Server running at ${PORT} PORT`)
})