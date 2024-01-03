const express = require("express");
const blogRouter = require("./routes/BlogRoutes");
const app = express();

app.use(express.json());
app.use("/api/blogs", blogRouter);

app.listen(3001, () =>{
    console.log("Server is running on port 3001");
});

const mongoose = require("mongoose");
//configure mongoose
mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/CRUD",
    {
        useNewUrlParser: true,
    useUnifiedTopology: true,
    }
);
    mongoose.connection.on('connected', () => {
        console.log("Connected to MongoDB");
    });
    
    mongoose.connection.on('error', (err) => {
        console.error('MongoDB connection error:', err);
    });
module.exports = app;