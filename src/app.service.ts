import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { User } from './user/schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class AppService {

   getMessage(): string {
    return  "Nest Js App";
  }
}
