// @ts-nocheck
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const equipmentRoutes = require("./routes/equipmentRoutes");
const maintenanceRoutes = require("./routes/maintenanceRoutes");
const userRoutes = require("./routes/userRoutes");
const teamRoutes = require("./routes/teamRoutes");
const authRoutes = require("./routes/authRoutes");

const app1 = express();

connectDB();

app1.use(cors());
app1.use(express.json());
app1.use("/api/auth", authRoutes);
app1.use("/api/users", userRoutes);
app1.use("/api/teams", teamRoutes);
app1.use("/api/equipment", equipmentRoutes);
app1.use("/api/maintenance", maintenanceRoutes);

const SERVER_PORT = process.env.PORT || 5000;
app1.listen(SERVER_PORT, () => {
  console.log(`Server running on port ${SERVER_PORT}`);
});