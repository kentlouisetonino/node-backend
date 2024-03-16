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

      return {
        statusCode: 200,
        message: 'Successfully created the collection.',
      };
    } catch (error: unknown) {
      if (error instanceof Error) {
        return {
          statusCode: 500,
          message: error.message,
        };
      }
    }
  }
}
