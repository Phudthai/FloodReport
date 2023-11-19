require("./config/db");
const express = require("express");
const { chats } = require("./data/data");
const UserRouter = require("./routes/UserRoute");

const app = express()

const bodyParser = require("express").json;
app.use(bodyParser());

app.get("/api/chat", (req, res) => {
    res.send(chats)
});

app.get('/api/chat/:id', (req, res) => {
    // console.log(req.params.id);
    const singleChat = chats.find(c => c._id === req.params.id);
    res.send(singleChat);
})

app.use("/api", UserRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});