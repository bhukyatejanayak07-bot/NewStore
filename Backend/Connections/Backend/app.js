const express=require(`express`)
const cors=require(`cors`)
//const {link}=require(`node:fs`)

const app=express()//-middle ware securitry


app.use(express.json())
app.use(cors())// enable the cors so that we can share resoure even though having diff. code/address
//if cors is not there we cant share single piece of data



//api 
app.post(`/login`,(req,res)=>{// sending the data to backend
  
   // data  form frontend - req.body
    const{name,email}=req.body
    console.log(name)
    

    //simple validation
    if(name&&email){
        res.json({message:`welcome ${name} to my website`})
    }else{
        res.json({message:`email and Name both are required`})
    }
})

//starting the backend server
app.listen(3000,()=>
{
    console.log(`Server Running http://localhost:3000`)
})