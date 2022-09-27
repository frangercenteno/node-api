const mongoose = require('mongoose');

const dbConnect = () => {
  const DB_URI = process.env.DB_URI;
  mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, (err, _res) => {
    if (!err) {
      console.log('Connection Succesfully ');
    } else {
      //console.log(err)
      console.log('Connection Error')
    }
  });
};

module.exports = dbConnect;