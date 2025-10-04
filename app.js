const express = require("express");
const profileRoutes = require("./routes/profileRoutes");

const app = express();
app.use(express.json());

// Routes
app.use("/profile", profileRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(` Server running on http://localhost:${PORT}`));
