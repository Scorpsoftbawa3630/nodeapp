Obj=require('express');
const port=process.env.PORT || 3000;
method=Obj();

method.get('',(req,res)=>{
	res.send('hey wollcome on live');
});

method.listen(port,()=>{
	console.log('server strat');
});