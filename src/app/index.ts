import { Router } from 'express';
import TestRouters from './test/routes';

// export all routes
const router: Router = Router();

router.use(TestRouters);

export default router;