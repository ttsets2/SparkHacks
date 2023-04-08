const express = require('express');
const app = express();

const { MongoClient, Db } = require("mongodb");

async function main(){
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     */
    const uri = "mongodb+srv://ttsets2:L4EEOmZO8wcq6F6f@chatdb.gjhvenu.mongodb.net/?retryWrites=true&w=majority";

    const client = new MongoClient(uri);
 
    try {
        // Connect to the MongoDB cluster
        await client.connect();
        console.log("Connected to DB!!!!");


        
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);


// Serve static files from the 'public' directory
app.use(express.static('public'));

app.listen(3000, () => {
    console.log('App listening on port 3000');
});
