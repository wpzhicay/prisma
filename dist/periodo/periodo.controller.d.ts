import { PeriodoService } from './periodo.service';
import { CreatePeriodoDto } from './dto/create-periodo.dto';
import { UpdatePeriodoDto } from './dto/update-periodo.dto';
export declare class PeriodoController {
    private readonly periodoService;
    constructor(periodoService: PeriodoService);
    create(createPeriodoDto: CreatePeriodoDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updatePeriodoDto: UpdatePeriodoDto): string;
    remove(id: string): string;
}
