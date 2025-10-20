import { IsString, IsInt, IsDateString, IsEmail } from 'class-validator';


export class CreateEstudianteDto {
  @IsString()
  nombre!: string;

  @IsString()
  apellido!: string;

  @IsDateString()
  fecha_nacimiento!: string;
   @IsEmail()
  correo!: string;

  @IsInt()
  carrera_id!: number;
}


