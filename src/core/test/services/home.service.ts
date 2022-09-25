import { Service } from "typedi";
import { HomeBody } from "@core/test/models/home.entity";

@Service()
export class HomeService {
    public home(): HomeBody {
        const HomeBody: HomeBody = {
            title: 'Pagina de ejemplo',
            body: 'Esta es una descripcion de esta pagina de prueba.'
        };
        return HomeBody;
    }
}