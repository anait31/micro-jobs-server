require('dotenv').config()
const express = require('express')
const cors = require('cors')
const port = process.env.PORT || 5000
const app = express()

// micro-jobs
// dnNJRdxHah13fP0L

// Middleware
const corsOptions = {
    origin: ['http://localhost:5173', 'http://localhost:5174'],
    credentials: true,
    optionSuccessStatus: 200,
}
app.use(express.json())
app.use(cors(corsOptions))



const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://micro-jobs:dnNJRdxHah13fP0L@cluster0.nprls.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        // await client.connect();

        
        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);






app.get("/", (req, res) => {
    res.send('Micro Job Server is Running')
})

app.listen(port, () => {
    console.log(`Micro job server is running on PORT: ${port}`)
})


