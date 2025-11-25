import { IsString, IsDate } from 'class-validator';

export class CreatePeriodoDto {
  @IsString()
  nombre!: string;

  @IsDate()
  fecha_inicio!: Date;

  @IsDate()
  fecha_fin!: Date;
}
