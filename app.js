const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const port = process.env.PORT;

const posts_routers = require("./routers/posts_routers");
app.use("/posts",posts_routers);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

