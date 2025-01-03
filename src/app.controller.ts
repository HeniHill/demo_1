import { Controller, Get, Inject, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './user/schemas/user.schema';
import { CreateUserDto } from './user/dto/CreateUser.dto';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService
  ) {}


  @Get()
  getHello(): string {
    return this.appService.getMessage();
  }
  
  
}
