import { Body, Controller,Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { get } from 'http';
import { CreateUserDto } from 'src/dto/CreateUser.dto';

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) {}

 @Get()
  getUser() {
    return this.userService.findAll();
  }
  @Post()
  createUser(@Body() user: CreateUserDto){
   return this.userService.createUser(user);
  }
}
