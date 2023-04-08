const express = require('express');
const app = express();

// Serve static files from the 'public' directory
app.use(express.static('public'));

app.listen(5500, () => {
    console.log('App listening on port 3000');
});
