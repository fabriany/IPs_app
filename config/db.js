const mongoose = require('mongoose');

const DB_URI = process.env.MONGO_URL || 'mongodb+srv://fabriany123:Mercurio.2022@cluster0.gikzy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
module.exports = () => {
  const connect = () => {
    mongoose.connect(
      DB_URI.replace(/["']+/g, ''),
      {
        keepAlive: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
      },
      (err) => {
        if (err) {

          console.log('DB_URI: ' + DB_URI);
          console.log('Error de conexon a DB: ' + err);
        } else {
          console.log('Conexion Correcta!!!');
        }
      }
    )
  }

  connect();
}
