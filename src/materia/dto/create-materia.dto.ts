import { IsString, IsInt } from 'class-validator';

export class CreateMateriaDto {
  @IsString()
  nombre!: string;

  @IsString()
  codigo!: string;

  @IsInt()
  carrera_id!: number;

  @IsInt()
  profesor_id!: number;
}
