const app=require('express')();
const cors=require('cors')
const morgan=require('morgan');
const port=5050;
app.use(cors());
app.use(morgan('dev'));
app.get('/product',async(req,res)=>{
    const products=[
        {pid:4,pname:'bread',price:5,pdesc:'best bread',picName:'bread/.jpg'},
        {pid:5,pname:'eggs',price:5,pdesc:'best bread',picName:'eggs.jpg'},
        {pid:6,pname:'cheese',price:5,pdesc:'best bread',picName:'cheese.jpg'},
        {pid:8,pname:'milk',price:5,pdesc:'best bread',picName:'milk.jpg'}
    ];
    return res.status(200).json(products);
})
app.get('/product/:id',async(req,res)=>{
    const pid=req.params.id;
    console.log(pid);
    const products=[
        {pid:4,pname:'bread',price:5,pdesc:'best bread',picName:'bread/.jpg'},
        {pid:5,pname:'eggs',price:5,pdesc:'best bread',picName:'eggs.jpg'},
        {pid:6,pname:'cheese',price:5,pdesc:'best bread',picName:'cheese.jpg'},
        {pid:8,pname:'milk',price:5,pdesc:'best bread',picName:'milk.jpg'}
    ];
    let prod=products.find((p)=>p.pid==pid);
    console.log(prod);
    return res.status(200).json(prod);
})









app.listen(port,()=>{console.log('server up')});