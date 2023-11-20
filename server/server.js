require("./config/db");
const express = require("express");
const { chats } = require("./data/data");
const UserRouter = require("./routes/UserRoute");
const authRouter = require('./routes/auth')
const app = express()
const cors = require("cors")

const bodyParser = require("express").json;
app.use(bodyParser());
app.use(express.json());
app.use(cors())

app.get("/api/chat", (req, res) => {
    res.send(chats)
});

app.get('/api/chat/:id', (req, res) => {
    // console.log(req.params.id);
    const singleChat = chats.find(c => c._id === req.params.id);
    res.send(singleChat);
})

app.use("/api", UserRouter);
app.use('/api', authRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});