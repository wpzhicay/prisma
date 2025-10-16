import { IsString, IsInt, IsDateString } from 'class-validator';

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
function IsEmail(): (target: CreateEstudianteDto, propertyKey: "correo") => void {
  throw new Error('Function not implemented.');
}

