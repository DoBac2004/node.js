const blogService = require("../services/BlogService");

exports.getAllBlogs = async (req, res) =>{
    try{
        const blogs = await blogService.getAllBlogs();
        res.json({date : blogs , status:"success"}); 
    }catch (err){
        res.status(500).json({error: err.message});
    }
};
exports.createBlog = async (req,res) =>{
    try{
        const blogs = await blogService.createBlog(req.body);
        res.json({date : blogs , status:"success"}); 
    }catch (err){
        res.status(500).json({error: err.message});
    }
};

exports.getBlogById = async (req,res) =>{
    try{
        const blogs = await blogService.getBlogById(req.params.id);
        res.json({date : blogs , status:"success"}); 
    }catch (err){
        res.status(500).json({error: err.message});
    }
};

exports.updateBlog = async (req,res) =>{
    try{
        const blogs = await blogService.updateBlog(req.params, req.body);
        res.json({date : blogs , status:"success"}); 
    }catch (err){
        res.status(500).json({error: err.message});
    }
};

exports.deleteBlog= async (req,res) =>{
    try{
        const blogs = await blogService.deleteBlog(req.params.id);
        res.json({date : blogs , status:"success"}); 
    }catch (err){
        res.status(500).json({error: err.message});
    }
};

