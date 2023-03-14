let {MongoClient} = require('mongodb');

async function main(){
    const uri = "mongodb+srv://purvikpanchal:fFJeL0stoP4ELPjY@cluster0.vht20ci.mongodb.net/?retryWrites=true&w=majority";

    const client = new MongoClient(uri);

    try{
        await client.connect();

        // await listDatabases(client);

        // await createListing(client, {
        //     name: "John Wick",
        //     address: "New York",
        //     age: 30
        // })

        // await createMultipleListings(client,[
        //     {
        //         name: "Peter Parker",
        //         address: "New York",
        //         age: 25
        //     },
        //     {
        //         name: "Tony Stark",
        //         address: "California",
        //         age: 30
        //     },
        //     {
        //         name: "Scott Lang",
        //         address: "New Jersey",
        //         age: 29
        //     },
        //     {
        //         name: "Steve Rogers",
        //         address: "New York",
        //         age: 70
        //     }
        // ])


        // await findOneListingByName(client, "John Wick");


        await findMultiple(client, "Tony Stark");
    }catch(err){
        console.error(err);
    }finally{
        await client.close();
    }
}
main().catch(console.error);

async function findMultiple(client, nameOfListing){
    const cursor = await client.db("mydb").collection("students").find({name: nameOfListing}).limit(15);

    const result = await cursor.toArray();
    if(result){
        console.log(`Found listing in the collection with the name '${nameOfListing}'`);
        result.forEach((result, i) => {
            // let date = new Date(result.last_review).toDateString();
            console.log(result);
        })

    }else{
        console.log(`No listing found with the name '${nameOfListing}'`);
    }
}

// async function findOneListingByName(client, nameOfListing){
//     const result = await client.db("mydb").collection("students").findOne({ name: nameOfListing });
    
//     if(result){
//         console.log(`Found a listing in the collection with the name '${nameOfListing}'`);
//         console.log(result);
//     }else{
//         console.log(`No listing found with the name '${nameOfListing}'`);
//     }
// }

// async function createMultipleListings(client, newListings){
//     const result = await client.db("mydb").collection("students").insertMany(newListings);

//     console.log(`${result.insertedCount} new listings created with the following id(s)`);
//     console.log(result.insertedIds);

// }

// async function createListing(client, newListing){
//     const result = await client.db("mydb").collection("students").insertOne(newListing);

//         console.log(`New listing created with the following id: ${result.insertedId}`);
// }

// async function listDatabases(client){
//     const databasesList = await client.db().admin().listDatabases();

//     console.log("Databases:");
//     databasesList.databases.forEach(db => {
//         console.log(`- ${db.name}`);
//     });
// }