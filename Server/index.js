const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config()

const DbConnection = require("./DB/dataBaseConnection");
const AppError = require("./Utils/AppError");

const AuthRoute = require("./Routes/authRoutes");
const NotificationsRoute = require("./Routes/notificationRoutes");

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
app.use("/api/notifications", NotificationsRoute)

app.all("*", (req, res, next) =>
    next(new AppError(`can't find ${req.originalUrl} on this server`, 404))
);


let PORT = process.env.PORT
app.listen(PORT, () => {
    console.log("server Started at === ", PORT);
})
