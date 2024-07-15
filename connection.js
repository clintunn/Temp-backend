const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://Template_app:KG5IGqyR0DAxGaLW@cluster0.umrdntl.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('connected to MongoDB');
})
.catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
});
