import { ForbiddenException, Injectable } from '@nestjs/common';
import { ExceptionsHandler } from '@nestjs/core/exceptions/exceptions-handler';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from 'src/dto/CreateUser.dto';
import { User } from 'src/schemas/user.schema';

@Injectable()
export class UserService {

    constructor(@InjectModel(User.name) private userModel: Model<User>){}

    async findAll(): Promise<User[]> {
        return this.userModel.find().exec();
    }

    createUser(user:CreateUserDto):Promise<User>{
        
        // crate user based on DTO
        const newUser = new this.userModel(user);

        return newUser.save();


        // return the created user
    }

    async getUserById(id:string):Promise<User>{
        return this.userModel.findById(id).exec();
    }
}
