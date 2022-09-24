import { Request, Response, Router } from 'express';
import Container from 'typedi';
import HomeController from '../controllers/home.controller';
import { ShowController } from '../controllers/show.controller';
import { HomeService } from '../services/home.service';

const router: Router = Router();

// get dependenci inyection
const homeController = Container.get(HomeController);
const showController = Container.get(ShowController);

// routes
router.get('/test', (req: Request, res: Response) => homeController.home(req, res));

router.get('/test/:id', (req: Request, res: Response) => showController.show(req, res));

export default router;