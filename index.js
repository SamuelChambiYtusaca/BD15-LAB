const mongoose = require("mongoose")
const express = require("express")
const dotenv = require("dotenv")
const cors = require("cors")




const app = express();

dotenv.config({
    path: 'config.env'
})

var corsOptions = {
    origin: "http://localhost:8081"
};
  
app.use(cors("http://localhost:3000"));



mongoose.connection.on("open", () => {
    console.log("Base de datos conectada\n")
});

let { HOST, DBPORT, DBNAME } = process.env;

const uri = `mongodb://${HOST}:${DBPORT}/${DBNAME}`;
mongoose.connect(uri,{
    useUnifiedTopology: true,
    useNewUrlParser: true,
},{ssl:true});

const publiRouter = require("./routes/publi.routes")

app.use('/app/',publiRouter);


app.use((req,res,next)=>{
    res.status(400).json({
        success: false,
        message: "Pagina no encontrada"
    })
});








const PORT = process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log(`Escuchando por el puerto ${PORT}`)
});
