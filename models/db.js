const mongoose = require('mongoose');
const DbUrl = process.env.MONGODB_URI;
try {
    (async ()=>{
        await mongoose.connect(DbUrl, { useNewUrlParser: true, useUnifiedTopology: true });
        
    })();
	console.log('Connected to Database');
}catch(err){
    console.log(err);
}


module.exports = mongoose;
