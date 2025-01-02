import { Body, Controller,Delete,Get, HttpException, Param, Patch, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { get } from 'http';
import { CreateUserDto } from 'src/dto/CreateUser.dto';
import { ValidateObjectIdPipe } from 'src/exception/object.validation';
import { UpdateUserDto } from 'src/dto/UpdateUser.dto';

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

  @Get(':id')
  async getUserById(@Param('id',ValidateObjectIdPipe) id: string){
      const user= await this.userService.getUserById(id);
      console.log(user);

      if(!user){
          throw new HttpException('User not found',404);
      }

      return user;
  }

  @Patch(':id')
  updateUserById(@Param('id',ValidateObjectIdPipe) id:string,@Body() user: UpdateUserDto){
    return this.userService.updateUserById(id,user);
  }

  @Delete(':id')
  deleteUserById(@Param('id',ValidateObjectIdPipe) id:string){
    return  this.userService.deleteUserById(id);
  }

  
}
