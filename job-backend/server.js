const express = require("express")
const cors =  require("cors")
const connectDB = require('./config/db')

const app = express();
app.use(cors());
app.use(express.json());

//connecting database
connectDB();

app.get('/',(req,res)=>{
  res.send("API is running....")
})

app.get('/test', (req,res)=>{
  res.send("Test route working");
});


//routes
const jobsRoutes = require('./routes/jobs');
app.use('/jobs',jobsRoutes)


const PORT = process.env.PORT||5000;
app.listen(PORT,()=>console.log(`server running on port ${PORT}`))
