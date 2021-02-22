import { MongoClient } from 'mongodb';

export const mocks = {
    // ObjectId: () => '123',
};

var dbname = process.env.DB_NAME || 'mocks';
var url = process.env.DATABASE_URI || 'mongodb://localhost:27017/';

export const list = async <T>(collectionName: string): Promise<T[]> => {
    const query = {}

    const client = await MongoClient.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true 
    }).catch(err => { console.log(err) });
    if (!client) throw new Error('cannot connect to MongoDB');

    try {
        const db = client.db(dbname);
        const collection = db.collection(collectionName);
        
        const res = await collection.find(query).toArray();

        return res;
    } catch (err) {
        console.log(err);
    } finally {
        client.close();
    }

    return []
}

