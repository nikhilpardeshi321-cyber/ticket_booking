const userModel = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const validator = require("validator");

exports.signup = async (req, res) => {
    const { name, email, password, role } = req.body;

    // Basic email validation
    if (!validator.isEmail(email)) {
        return res.status(400).json({
            message: "Invalid email format"
        });
    }

    // Check if email username is not only numbers
    const localPart = email.split("@")[0];
    if (/^\d+$/.test(localPart)) {
        return res.status(400).json({
            message: "Email username should not only numbers"
        });
    }

    const hashed = await bcrypt.hash(password, 10);

    const user = await userModel.create({
        name,
        email,
        password: hashed,
        role
    });

    res.status(201).json({
        status: true,
        message: "User created",
        user: {
            id: user._id,
            email: user.email,
            role: user.role
        }
    });
};

exports.login = async (req, res) => {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email });
    if (!user) return res.status(400).json({ status: false, message: "Invalid email" });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(400).json({ status: false, message: "Wrong password" });

    const token = jwt.sign(
        {
            id: user._id,
            role: user.role
        },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
    );

    res.status(200).json({
        satus: true,
        token,
        user: {
            id: user._id,
            email: user.email,
            role: user.role
        }
    });
};