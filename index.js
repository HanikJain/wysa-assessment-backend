require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');


async function main() {
  await mongoose.connect(process.env.MONGODB_URL);
}

main().catch(err => console.log(err, "Error connecting mongodb"));

const app = express();

app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

//CORS
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header(
//     'Access-Control-Allow-Headers',
//     "Origin, X-Requested-With, Content-Type, Accept, Authorization" 
//     );

// })


app.use(cors({
  origin: "*",
  credentials: true,
}))

PORT = process.env.PORT || 5000;


require('./routes/user')(app);




// if(process.env.NODE_ENV === 'production'){
//   app.use(express.static("client/build"));

//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//   })
// }

app.listen(PORT, function () {
    console.log(`listening on port ${PORT}`);
});
