// // https://mongodb.github.io/node-mongodb-native/3.6/api/Collection.html

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


        // await findMultiple(client, "Tony Stark");

        // await updateListingByName(client, "Tony Stark", {age: 31});

        // await upsertListingByName(client, "Tony Stark", {username: "Ironman"});

        // await updateAllListingsToHaveProperty1(client);

        // await deleteListingByName(client, "Tony Stark");

        await deleteListingsScrapedBeforeDate(client, new Date("2023-02-01"));
    }catch(err){
        console.error(err);
    }finally{
        await client.close();
    }
}
main().catch(console.error);



async function deleteListingsScrapedBeforeDate(client, date){
    const result = await client.db("mydb").collection("students").deleteMany({ "last_scraped": { $lt: date}});

    console.log(`${result.deletedCount} document(s) was/were deleted`);
}



// async function deleteListingByName(client, nameOfListing){
//     const result = await client.db("mydb").collection("students").deleteOne({name: nameOfListing});

//     console.log(`${result.deletedCount} document(s) was/were deleted.`);
// }



// async function updateAllListingsToHaveProperty1(client) {
//     const result = await client.db("mydb").collection("students").updateMany(
//         { property1: { $exists: false } }, 
//         { $set: { property1: "Unknown" } });
//     console.log(`${result.matchedCount} document(s) matched the query criteria.`);
//     console.log(`${result.modifiedCount} document(s) was/were updated.`);
// }



// async function upsertListingByName(client, nameOfListing, updatedListing) {
//     const result = await client.db("mydb").collection("students").updateOne({ name: nameOfListing }, { $set: updatedListing }, { upsert: true });
//     console.log(`${result.matchedCount} document(s) matched the query criteria.`);

//     if (result.upsertedCount > 0) {
//         console.log(`One document was inserted with the id ${result.upsertedId._id}`);
//     } else {
//         console.log(`${result.modifiedCount} document(s) was/were updated.`);
//     }
// }



// async function updateListingByName(client, nameOfListing, updatedListing) {
//     const result = await client.db("mydb").collection("students").updateOne({ name: nameOfListing }, { $set: updatedListing });
//     console.log(`${result.matchedCount} document(s) matched the query criteria.`);
//     console.log(`${result.modifiedCount} document(s) was/were updated.`);
// }



// async function findMultiple(client, nameOfListing){
//     const cursor = await client.db("mydb").collection("students").find({name: nameOfListing});

//     const result = await cursor.toArray();
//     if(result){
//         console.log(`Found listing in the collection with the name '${nameOfListing}'`);
//         result.forEach((result, i) => {
//             // let date = new Date(result.last_review).toDateString();
//             console.log(result);
//         })

//     }else{
//         console.log(`No listing found with the name '${nameOfListing}'`);
//     }
// }



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