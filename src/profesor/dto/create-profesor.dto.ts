// src/profesor/dto/create-profesor.dto.ts
import { IsString, IsEmail, IsInt } from 'class-validator';
export class CreateProfesorDto {
  @IsString()
  nombre!: string;
  @IsEmail()
  correo!: string;
  @IsInt()
  carrera_id!: number;
}