const express = require('express');
const app = express();
const mongodb = require('./data/database');
const port = 3000;
app.get('/', (req, res) => {
  res.send("charles Hemedi");
});
app.get('/esther', (req, res) => {
    res.send("esther grace");
  });
   
 app.get('/gedeon',(req, res)=>{
    res.send("Gedeon Noe");
 });
app.listen(process.env.PORT || port, () => {
  console.log('Web Server is listening at port ' + (process.env.PORT || 3000));
});

mongodb.initDb((err) => {
  if (err) {
      console.log(err);
  } else {
      app.listen(port, () => {
          console.log(`Database is listening and node Running on port ${port}`);
      });
  }
});