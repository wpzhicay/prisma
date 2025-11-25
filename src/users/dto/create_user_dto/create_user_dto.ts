import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'El nombre es obligatorio' })
    name!: string;

  @IsEmail({}, { message: 'El correo debe tener un formato válido' })
    email!: string;

  @IsNotEmpty({ message: 'La contraseña es obligatoria' })
    @MinLength(6, { message: 'La contraseña debe tener mínimo 6 caracteres' })
    password!: string;
}
