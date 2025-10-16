import { CreateProfesorDto } from './dto/create-profesor.dto';
import { UpdateProfesorDto } from './dto/update-profesor.dto';
export declare class ProfesorService {
    create(createProfesorDto: CreateProfesorDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateProfesorDto: UpdateProfesorDto): string;
    remove(id: number): string;
}
