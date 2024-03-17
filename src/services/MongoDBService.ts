import { MongoClient } from 'mongodb';

export default class MongDBService {
  static async createCollection({
    uri,
    database,
    collection,
  }: {
    uri: string;
    database: string;
    collection: string;
  }) {
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
