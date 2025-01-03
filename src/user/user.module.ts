import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/user/schemas/user.schema';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
    imports:[
        MongooseModule.forFeature([{name:User.name,schema:UserSchema}]),
    ],
    controllers:[UserController],
    providers:[UserService]
})
export class UserModule {}
