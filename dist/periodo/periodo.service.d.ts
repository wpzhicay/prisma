import { CreatePeriodoDto } from './dto/create-periodo.dto';
import { UpdatePeriodoDto } from './dto/update-periodo.dto';
export declare class PeriodoService {
    create(createPeriodoDto: CreatePeriodoDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updatePeriodoDto: UpdatePeriodoDto): string;
    remove(id: number): string;
}
