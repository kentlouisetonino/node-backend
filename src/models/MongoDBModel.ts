export interface CreateCollectionInput {
  uri: string;
  database: string;
  collection: string;
}

export type CreateCollectionOutput = void;

export interface CreateDocumentInput {
  uri: string;
  database: string;
  collection: string;
  document: Object;
}

export interface CreateDocumentOutput {
  acknowledged: boolean;
  insertedId: string;
}
