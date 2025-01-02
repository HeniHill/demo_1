import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './schemas/user.schema';
import { CreateUserDto } from './dto/CreateUser.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getMessage();
  }
  
  @Post()
  createUser(user:CreateUserDto){

  }
}
