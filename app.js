var express = require ('express');
var nunjucks  = require('nunjucks');

var app = express();
app.use(express.static(__dirname + '/public'));

// Apply nunjucks and add custom filter and function (for example). 
app.set('view engine', 'njk');
var env = nunjucks.configure(['views/'], { // set folders with templates
    autoescape: true, 
    express: app 
});

env.addFilter('myFilter', function(obj, arg1, arg2) {
    console.log('myFilter', obj, arg1, arg2);
    // Do smth with obj
    return obj;   
});
env.addGlobal('myFunc', function(obj, arg1) { 
    console.log('myFunc', obj, arg1);
    // Do smth with obj
    return obj; 
});

app.get('/', function(req, res){
    res.render('index.njk', {title: 'Main page'});    
});

app.get('/login', function(req, res){
    res.render('login.njk', {title: 'Main page'});    
});

app.get('/products', function(req, res){
    res.render('products.njk', {title: 'Main page'});    
}); 

app.get('/blog', function(req, res){
    res.render('blog.njk', {title: 'Main page'});    
});

app.get('/blogsingle', function(req, res){
    res.render('blog-single.njk', {title: 'Main page'});    
});

app.listen(3003, function() {
    console.log('Example app listening on port 3000...');
});