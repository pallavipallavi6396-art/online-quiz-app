
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { createClient } = require("@supabase/supabase-js");

const app = express();
const PORT = 5000;

// Connect to Supabase using private environment configuration
const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_PUBLISHABLE_KEY
);

app.use(cors());
app.use(express.json());

// Check whether the backend is running
app.get("/api/health", (req, res) => {
    res.json({
        message: "PuzzleForge backend is working!"
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`PuzzleForge server running on http://localhost:${PORT}`);
});
