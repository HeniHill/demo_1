import { ForbiddenException, HttpException, Injectable } from '@nestjs/common';
import { ExceptionsHandler } from '@nestjs/core/exceptions/exceptions-handler';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from 'src/user/dto/CreateUser.dto';
import { UpdateUserDto } from 'src/user/dto/UpdateUser.dto';
import { User } from 'src/user/schemas/user.schema';

@Injectable()
export class UserService {

    constructor(@InjectModel(User.name) private userModel: Model<User>){}

    async findAll(): Promise<User[]> {
        return await this.userModel.find().populate('incidents').exec();
    }

    createUser(user:CreateUserDto):Promise<User>{
        
        // crate user based on DTO
        const newUser = new this.userModel(user);

        return newUser.save();


        // return the created user
    }

    async getUserById(id:string):Promise<User>{
        return await this.userModel.findById(id).populate('incidents').exec();
    }

    async updateUserById(id:string,user:UpdateUserDto){
        const updatedUser= await this.userModel.findByIdAndUpdate(id,user,{new:true});

        if(!updatedUser) throw new HttpException("User Not Found",404);

        return updatedUser;
    }

    async deleteUserById(id:string){
        const deletedUser= await this.userModel.findByIdAndDelete(id);

        if(!deletedUser) throw new HttpException("User Not Found",404);

        return deletedUser;
    }
}
