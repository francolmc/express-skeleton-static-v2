import { Request, Response } from "express";
import { Service } from "typedi";
import { Article } from "../models/article.entity";
import { ShowService } from "../services/show.service";

@Service()
export class ShowController {
    public constructor( private readonly _showService: ShowService ) {}

    public show(req: Request, res: Response) {
        const content: Article = this._showService.show(+req.params.id);
        res.render('test/show', { content });
    }
}