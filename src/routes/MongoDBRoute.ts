import ExpressService from '../services/ExpressService';
import MongoDBController from '../controllers/MongoDBController';

// Get the express router instance.
const router = ExpressService.router;

router.post('/create/collection', MongoDBController.createCollection);

export default router;
