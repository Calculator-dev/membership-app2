require('dotenv').config();

const config = {
    port: process.env.PORT || 5000,
    secret: process.env.JWT_SECRET || 'Your secret key',
    mongo: process.env.MONGO || "mongodb+srv://Vjezba:HXngOG0eRTaNxy9h@baselogin.25mbg.mongodb.net/PizzaOrderComposer?retryWrites=true&w=majority"
}

export default config;