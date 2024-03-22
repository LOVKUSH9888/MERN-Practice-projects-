const mongoose = require("mongoose");
// mongoose.connect('mongodb://127.0.0.1:27017/test');
//Define a Schema
// const Cat = mongoose.model('Cat', { name: String });
// const kitty = new Cat({ name: 'Zildjian' });
// // kitty.save().then(() => console.log('meow'));

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, unique: true, required: true },
  role: { type: String, enum: ["admin", "user"], default: "user" },
  resources: [
    {
      name: { type: String, required: true },
      description: { type: String }
    }
  ]
});

const User = mongoose.model("User", userSchema);

module.exports = User;
