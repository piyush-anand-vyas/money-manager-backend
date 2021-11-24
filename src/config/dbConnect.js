const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    await mongoose.connect('mongodb+srv://piyush:WhyOxy7WtKEzfswu@money-manager.tvqrs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(`DB connected Successfully`);
  } catch (error) {
    console.log(`Error ${error.message}`);
  }
};

module.exports = dbConnect;

//WhyOxy7WtKEzfswu
//mongodb+srv://piyush:<password>@money-manager.tvqrs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority