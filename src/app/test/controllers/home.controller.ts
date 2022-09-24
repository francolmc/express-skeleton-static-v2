import { Request, Response } from "express";
import { Inject, Service } from "typedi";
import { HomeBody } from "../models/home.entity";
import { HomeService } from "../services/home.service";

@Service()
class HomeController {
    constructor( 
        private readonly _homeService: HomeService 
    ) {}

    public home(req: Request, res: Response) {
        const content: HomeBody = this._homeService.home();
        res.render('test/index', { content });
    }
}

export default HomeController;