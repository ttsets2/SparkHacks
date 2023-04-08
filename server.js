const express = require('express');
const app = express();

// var MongoClient = require('mongodb').MongoClient;
// var url = 'mongodb://localhost/chatDB'
// MongoClient.connect(url, function(err, db){
//     console.log("YES! SOMEHOW IT CONNECTED!");
//     db.close();
// });

// Serve static files from the 'public' directory
app.use(express.static('public'));

app.listen(3000, () => {
    console.log('App listening on port 3000');
<<<<<<< HEAD
});
=======
});
>>>>>>> d987ae6 (me trying fix my stuff)
