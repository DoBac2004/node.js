const songService = require("../services/SongService");

exports.getAllSongs = async (req, res) =>{
    try{
        const songs = await songService.getAllSongs();
        res.json({date : songs , status:"success"}); 
    }catch (err){
        res.status(500).json({error: err.message});
    }
};
exports.createSong = async (req,res) =>{
    try{
        const songs = await songService.createSong(req.body);
        res.json({date : songs , status:"success"}); 
    }catch (err){
        res.status(500).json({error: err.message});
    }
};

exports.getSongById = async (req,res) =>{
    try{
        const songs = await songService.getSongById(req.params.id);
        res.json({date : songs , status:"success"}); 
    }catch (err){
        res.status(500).json({error: err.message});
    }
};

exports.updateSong = async (req,res,) =>{
    try{
        const songs = await songService.updateSong(req.params.id, req.body,);
        res.json({date : songs , status:"success"}); 
    }catch (err){
        res.status(500).json({error: err.message});
    }
};

exports.deleteSong= async (req,res) =>{
    try{
        const songs = await songService.deleteSong(req.params.id);
        res.json({date : songs , status:"success"}); 
    }catch (err){
        res.status(500).json({error: err.message});
    }
};

