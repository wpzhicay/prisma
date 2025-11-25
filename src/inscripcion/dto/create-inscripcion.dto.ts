import { IsInt, IsString, IsDate } from 'class-validator';

export class CreateInscripcionDto {
  @IsInt()
  estudiante_id!: number;

  @IsInt()
  curso_id!: number;

  @IsDate()
  fecha_inscripcion!: Date;

  @IsString()
  estado!: string;
}
