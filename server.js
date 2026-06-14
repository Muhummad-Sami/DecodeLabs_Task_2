const express = require("express");
const app = express();

app.use(express.json());

// Temporary storage (Project 2 only)
let users = [];

/* ---------------- CREATE USER ---------------- */
app.post("/api/users", (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({
            message: "Name and Email are required"
        });
    }

    const newUser = {
        id: users.length + 1,
        name,
        email
    };

    users.push(newUser);

    res.status(201).json({
        message: "User created successfully",
        user: newUser
    });
});

/* ---------------- GET ALL USERS ---------------- */
app.get("/api/users", (req, res) => {
    res.json({
        message: "All users fetched",
        data: users
    });
});

/* ---------------- GET USER BY ID ---------------- */
app.get("/api/users/:id", (req, res) => {
    const user = users.find(u => u.id == req.params.id);

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    res.json(user);
});

/* ---------------- UPDATE USER ---------------- */
app.put("/api/users/:id", (req, res) => {
    const user = users.find(u => u.id == req.params.id);

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    const { name, email } = req.body;

    if (name) user.name = name;
    if (email) user.email = email;

    res.json({
        message: "User updated successfully",
        user
    });
});

/* ---------------- DELETE USER ---------------- */
app.delete("/api/users/:id", (req, res) => {
    const index = users.findIndex(u => u.id == req.params.id);

    if (index === -1) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    users.splice(index, 1);

    res.json({
        message: "User deleted successfully"
    });
});

/* ---------------- SERVER ---------------- */
app.listen(5000, () => {
    console.log("Server running on port 5000");
});