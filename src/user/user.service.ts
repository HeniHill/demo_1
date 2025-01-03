import { CACHE_MANAGER , Cache } from '@nestjs/cache-manager';
import { ForbiddenException, HttpException, Inject, Injectable } from '@nestjs/common';
import { ExceptionsHandler } from '@nestjs/core/exceptions/exceptions-handler';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from 'src/user/dto/CreateUser.dto';
import { UpdateUserDto } from 'src/user/dto/UpdateUser.dto';
import { User } from 'src/user/schemas/user.schema';

@Injectable()
export class UserService {

    constructor(
        @InjectModel(User.name) private userModel: Model<User>,
        @Inject(CACHE_MANAGER)private cacheManager: Cache

){}

    async findAll(): Promise<User[]> {
        return await this.userModel.find().populate('incidents').exec();
    }

    createUser(user:CreateUserDto):Promise<User>{
        
        // crate user based on DTO
        const newUser = new this.userModel(user);

        return newUser.save();


        // return the created user
    }

    async getUserById(id:string):Promise<any>{
    const cachedUser= await this.cacheManager.get(id);

      if(cachedUser) {return cachedUser;}


     const user= await this.userModel.findById(id).populate('incidents').exec();
    await this.cacheManager.set(id,user,5000);
     return user
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
