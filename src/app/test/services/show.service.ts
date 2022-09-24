import { Service } from "typedi";
import { Article } from "../models/article.entity"

@Service()
export class ShowService {
    public show(id: number): Article {
        const article: Article = {
            id: 1,
            title: 'Titulo del articulo',
            description: 'Descripcion del articulo',
            content: 'Contenido mas completo del articulo, aqui va mucho mas texto.',
            publishDate: new Date()
        };

        return article;
    }
}