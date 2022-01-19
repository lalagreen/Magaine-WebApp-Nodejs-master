require('dotenv').config();

const express = require('express');
const app = express();
app.use(express.urlencoded({extended: false}));
app.use(express.json());
const router = require('./routes/index.js');
const routerAdmin = require('./routes/admin/index.js');
const fs = require('fs');
app.use(router);
app.use('/admin', routerAdmin);
const path = require('path');
// push notification
const webpush = require('web-push');

const vapidKeys = webpush.generateVAPIDKeys();

// Prints 2 URL Safe Base64 Encoded Strings
console.log(vapidKeys.publicKey, vapidKeys.privateKey);
webpush.setVapidDetails('mailto:stephadhok.co@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey);

fs.writeFileSync(path.join(__dirname, '/public/publickey.txt'), vapidKeys.publicKey);

const port = process.env.PORT || 4000;

app.listen(port, err => {
    if(err) throw err;
    console.log(`server running on port: ${port}`);
});
