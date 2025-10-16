import { CreateTituloDto } from './dto/create-titulo.dto';
import { UpdateTituloDto } from './dto/update-titulo.dto';
export declare class TituloService {
    create(createTituloDto: CreateTituloDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateTituloDto: UpdateTituloDto): string;
    remove(id: number): string;
}
