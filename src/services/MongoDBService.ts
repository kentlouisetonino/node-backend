import { MongoClient } from 'mongodb';

import {
  CreateCollectionInput,
  CreateCollectionOutput,
  CreateDocumentInput,
  CreateDocumentOutput,
} from '../models/MongoDBModel';

export default class MongDBService {
  static async createCollection({
    uri,
    database,
    collection,
  }: CreateCollectionInput): Promise<CreateCollectionOutput> {
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

  static async createDocument({
    uri,
    database,
    collection,
    document,
  }: CreateDocumentInput): Promise<CreateDocumentOutput> {
    const client = new MongoClient(uri);

    try {
      await client.connect();
      const db = client.db(database);
      return await db.collection(collection).insertOne(document);
    } finally {
      client.close();
    }
  }
}
