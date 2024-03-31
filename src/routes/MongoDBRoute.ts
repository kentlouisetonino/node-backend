import ExpressService from '../services/ExpressService';
import MongoDBController from '../controllers/MongoDBController';

// Get the express router instance.
const router = ExpressService.router;

router.post('/create/collection', MongoDBController.createCollection);
router.post('/create/document', MongoDBController.createDocument);

export default router;
