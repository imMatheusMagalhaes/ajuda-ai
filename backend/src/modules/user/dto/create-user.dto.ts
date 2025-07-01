import { User } from '@prisma/client';

export type CreateUserDto = Omit<User, 'updatedAt' | 'createdAt' | 'id'>;
