import { MongoClient } from 'mongodb';

interface MongoDBRun {
  uri: string;
  database: string;
  collection: string;
}

export default class MongDBService {
  static async createCollection({ uri, database, collection }: MongoDBRun) {
    const client = new MongoClient(uri);

    try {
      await client.connect();
      const db = client.db(database);
      await db.createCollection(collection);
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
}
