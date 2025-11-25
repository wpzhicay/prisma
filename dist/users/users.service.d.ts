import { User } from './entities/user.entity';
export declare class UsersService {
    private users;
    findByEmail(email: string): Promise<User | null>;
}
