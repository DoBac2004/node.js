const espress = require('express');
const exphbs = require('express-handlebars').engine;

const app = espress();
const port = process.env.PORT || 3000;
//cấu hình Handlebars làm view engine
app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
//middleware để phục vụ các tệp tĩnh từ thư mục public
app.use(espress.static(__dirname + '/public'));
const products = [
    { name: 'product 1', image: '/img/product1.jpeg'},
    { name: 'product 2', image: '/img/product2.jpeg'},

];
//định nghĩa các route
app.get('/', (req, res) => {
    //render view 'home.handlebars' với dữ liệu truyền vào
    res.render('home', { title: 'Home Page', message: 'Welcome to our website!'})

});
app.get('/about', (req, res) => {
    //render view 'about.handlebars' với dữ liệu truyền vào
    res.render('about', { title: 'About Us', message: 'Learn more about our company.'})
});
app.get('product', (req,res) =>{
    res.render('products ', {products});
})
//middleware xử lý lỗi 404
app.use((req, res) => {
    res.status(404).render('404', { title: '404 Not Found'});
});
//middleware xử lý các lỗi 500
app.use((req, res) => {
    console.error(err.stack)
    res.status(500).render('500', { title: '500 Internal Server Error'});
});

//Khởi động server và lắng nghe trên cổng đã chọn
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Express started on http://localhost:${PORT}`);
});