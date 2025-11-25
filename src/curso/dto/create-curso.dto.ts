import { IsInt, IsString } from 'class-validator';

export class CreateCursoDto {
  @IsInt()
  materia_id!: number;

  @IsInt()
  periodo_id!: number;

  @IsInt()
  cupo!: number;

  @IsString()
  horario!: string;
}
