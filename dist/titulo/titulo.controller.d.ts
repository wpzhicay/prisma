import { TituloService } from './titulo.service';
import { CreateTituloDto } from './dto/create-titulo.dto';
import { UpdateTituloDto } from './dto/update-titulo.dto';
export declare class TituloController {
    private readonly tituloService;
    constructor(tituloService: TituloService);
    create(createTituloDto: CreateTituloDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateTituloDto: UpdateTituloDto): string;
    remove(id: string): string;
}
