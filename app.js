// app.js

const express = require("express");
const blogRoutes = require("./routes/blogRoutes");

const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Blog routes
app.use("/api/blog", blogRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
