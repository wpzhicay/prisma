import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: '1',
      email: 'test@example.com',
      password: '$2a$10$abc...', // contraseña encriptada con bcrypt
    },
  ];

  async findByEmail(email: string): Promise<User | null> {
    const user = this.users.find((u) => u.email === email);
    return user ?? null;
  }
}
