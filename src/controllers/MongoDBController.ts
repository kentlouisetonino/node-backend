import { Request, Response } from 'express';
import MongoDBService from '../services/MongoDBService';

export default class MongoDBController {
  static async createCollection(req: Request, res: Response) {
    const uri = req.body?.uri;
    const database = req.body?.database;
    const collection = req.body?.collection;

    if (!uri) {
      return res.send({
        error: 'URI is required.',
      });
    }

    if (!database) {
      return res.send({
        error: 'Database is required.',
      });
    }

    if (!collection) {
      return res.send({
        error: 'Collection is required.',
      });
    }

    try {
      await MongoDBService.createCollection({ uri, database, collection });

      return res.send({
        statusCode: 200,
        message: 'Successfully created the collection.',
      });
    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.send({
          statusCode: 500,
          message: error.message,
        });
      }
    }
  }
  static async createDocument(req: Request, res: Response) {
    const uri = req.body?.uri;
    const database = req.body?.database;
    const collection = req.body?.collection;
    const document = req.body?.document;

    if (!uri) {
      return res.send({
        error: 'URI is required.',
      });
    }

    if (!database) {
      return res.send({
        error: 'Database is required.',
      });
    }

    if (!collection) {
      return res.send({
        error: 'Collection is required.',
      });
    }

    if (!document) {
      return res.send({
        error: 'Document is required.',
      });
    }

    try {
      const documentData = await MongoDBService.createDocument({
        uri,
        database,
        collection,
        document,
      });

      return res.send({
        statusCode: 200,
        data: documentData,
      });
    } catch (error: unknown) {
      if (error instanceof Error) {
        return res.send({
          statusCode: 500,
          message: error.message,
        });
      }
    }
  }
}
