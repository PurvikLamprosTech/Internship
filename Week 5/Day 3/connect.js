let {MongoClient} = require('mongodb');

async function main(){
    const uri = "mongodb+srv://purvikpanchal:fFJeL0stoP4ELPjY@cluster0.vht20ci.mongodb.net/?retryWrites=true&w=majority";

    const client = new MongoClient(uri);

    try{
        await client.connect();

        await listDatabases(client);
    }catch(err){
        console.error(err);
    }finally{
        await client.close();
    }
}
main().catch(console.error);

async function listDatabases(client){
    const databasesList = await client.db().admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => {
        console.log(`- ${db.name}`);
    });
}