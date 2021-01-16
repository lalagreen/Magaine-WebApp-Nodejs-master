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

const publicVapidKey = "AoGAd2C9nuQPA4E7Vu65sK2jd8nlJdj4jmxCmeo1liUGwM4RmhLIrK/v/m90pHx5-gnoktdsvhPeeeBb_7WoDKQHouRr6zXqefprXE";
const privateVapidKey  = "4FJVk0lublowONWPiifG3F024yXfvkoMnckar0gjEUL";
webpush.setVapidDetails('mailto:stephadhok.co@gmail.com@gmail.com', publicVapidKey, privateVapidKey);

fs.writeFileSync(path.join(__dirname, '/public/publickey.txt'), publicVapidKey);

const port = process.env.PORT || 4000;

app.listen(port, err => {
    if(err) throw err;
    console.log(`server running on port: ${port}`);
});