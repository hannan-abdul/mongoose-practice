import mongoose from "mongoose";
import app from "./app";
const port: Number = 5000;

// database connection 
async function bootstrap() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/mongoose-practice');
        console.log(`database connection successful`);
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}`)
        })
    } catch (err) {
        console.log(`failed to connect database`, err);
    }
}

bootstrap()
