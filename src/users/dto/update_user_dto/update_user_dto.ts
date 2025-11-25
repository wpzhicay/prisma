import { IsEmail, IsOptional, MinLength } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  name?: string;

  @IsOptional()
  @IsEmail({}, { message: 'El correo debe tener un formato válido' })
  email?: string;

  @IsOptional()
  @MinLength(6, { message: 'La contraseña debe tener mínimo 6 caracteres' })
  password?: string;
}
