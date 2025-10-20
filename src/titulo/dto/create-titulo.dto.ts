import { IsString, IsInt } from 'class-validator';

export class CreateTituloDto {
  @IsString()
  nombre!: string;

  @IsInt()
  profesor_id!: number;
}
