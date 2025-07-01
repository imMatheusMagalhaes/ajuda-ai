import FindParams from '@app/interfaces/find-params.interface';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { User } from '@prisma/client';
import { CreateUserDto } from '@modules/user/dto/create-user.dto';
import { UpdateUserDto } from '@modules/user/dto/update-user.dto';
import { UserService } from '@modules/user/user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  @Get()
  findAll(@Body() params: FindParams<User> = {}) {
    return this.userService.findAllUsers(params);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOneUser(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.updateUser(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.removeUser(id);
  }
}
