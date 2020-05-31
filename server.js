Obj=require('express');
path=require('path');    
 hbs = require('hbs')
method=Obj();
const port=process.env.PORT || 3000;
method.use(Obj.static(__dirname))
method.set('view engine','hbs');
hbs.registerPartials(__dirname + '/views/partials');


method.get('',(req,res)=>{
	res.render('home');
});

method.listen(port,()=>{
	console.log('server strat');
});