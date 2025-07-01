import FindParams from '@app/interfaces/find-params.interface';
import { DatabaseService } from '@infra/database/database.service';
import { CreateUserDto } from '@modules/user/dto/create-user.dto';
import { UpdateUserDto } from '@modules/user/dto/update-user.dto';
import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
@Injectable()
export class UserService {
  constructor(private database: DatabaseService) {}
  async createUser(data: CreateUserDto) {
    return this.database.user.create({ data });
  }

  async findAllUsers(params: FindParams<User> = {}): Promise<User[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.database.user.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }

  async findOneUser(id: string): Promise<User | null> {
    return this.database.user.findUnique({
      where: {
        id,
      },
    });
  }

  async findOneUserByEmail(email: string): Promise<User | null> {
    return this.database.user.findUnique({
      where: {
        email,
      },
    });
  }

  async updateUser(id: string, data: UpdateUserDto) {
    return this.database.user.update({
      data,
      where: {
        id,
      },
    });
  }

  async removeUser(id: string) {
    return this.database.user.delete({
      where: { id },
    });
  }
}
