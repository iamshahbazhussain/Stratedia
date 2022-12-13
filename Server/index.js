const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
const socketio = require("socket.io")
dotenv.config()

const DbConnection = require("./DB/dataBaseConnection");
const AppError = require("./Utils/AppError");

const AuthRoute = require("./Routes/authRoutes");
const UserRoute = require("./Routes/userRoutes");
const NotificationsRoute = require("./Routes/notificationRoutes");
const ChatRoute = require("./Routes/chatRoutes")

// const onConnection = require("./Utils/chatSocket")

let app = express();



app.use(express.json({ limit: "50mb" }));
app.use(cors({
    origin: "*"
}));
app.use(morgan("dev"));

DbConnection();


app.get("/health-check", (req, res) => {
    res.status("200").send("server is up and running");
});

app.use("/api/auth", AuthRoute)
app.use("/api/user", UserRoute)
app.use("/api/notifications", NotificationsRoute)
app.use("/api/chat", ChatRoute)

app.all("*", (req, res, next) =>
    next(new AppError(`can't find ${req.originalUrl} on this server`, 404))
);


let PORT = process.env.PORT
let server = app.listen(PORT, () => {
    console.log("server Started at === ", PORT);
})

const io = socketio(server, {
    cors: {
        origin: "*",
    },
});

////////////////////////////////////////////////////////

let users = [];

const addUser = (userId, socketId) => {
    !users.some((user) => user.userId === userId) &&
        users.push({ userId, socketId });
};

const removeUser = (socketId) => {
    users = users.filter((user) => user.socketId !== socketId);
};

const getUser = (userId) => {
    return users.find((user) => user.userId === userId);
};

io.on("connection", (socket) => {
    //when ceonnect
    console.log("a user connected.");

    //take userId and socketId from user
    socket.on("addUser", (userId) => {
        console.log("((((((", userId);
        addUser(userId, socket.id);
        io.emit("getUsers", users);
    });

    //send and get message
    socket.on("sendMessage", ({ senderId, receiverId, text }) => {
        const user = getUser(receiverId);

        console.log("Comming Message ===== ", senderId, receiverId, text);
        console.log("All Users ===== ", users);
        console.log("Finded User ===== ", user);
        if (user) {
            io.emit("getMessage", {
            // io.to(user.socketId).emit("getMessage", {
                senderId,
                text,
            });
        }
    });

    //when disconnect
    socket.on("disconnect", () => {
        console.log("a user disconnected!");
        removeUser(socket.id);
        io.emit("getUsers", users);
    });
});
//////////////////////////////////////////////////////////