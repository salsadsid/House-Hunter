const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "Full Name is required"],
    trim: true,
  },
  email: {
    type: String,
    validate: [validator.isEmail, "Provide a valid Email"],
    trim: true,
    lowercase: true,
    unique: true,
    required: [true, "Email address is required"],
  },
  phone: {
    type: String,
    validate: [
      validator.isMobilePhone,
      "Please provide a valid contact number",
    ],
  },
  role: {
    type: String,
    enum: ["owner", "renter"],
    default: "renter",
    required: [true, "Role is Required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    validate: {
      validator: (value) =>
        validator.isStrongPassword(value, {
          minLength: 6,
          minLowercase: 1,
          minUppercase: 0,
          minNumbers: 1,
          minSymbols: 0,
        }),
      message: "Password {VALUE} is not strong enough.",
    },
  },
});

userSchema.pre("save", function (next) {
  const password = this.password;
  const hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
  this.password = hashedPassword;
  next();
});

userSchema.methods.comparePassword = async function (password, hash) {
  let isPasswordValid;

  isPasswordValid = await bcrypt.compare(password, hash);
  console.log(isPasswordValid, "sa");
  return isPasswordValid;
};

const User = mongoose.models.User || mongoose.model("User", userSchema);

module.exports = User;
