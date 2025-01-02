import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class User{

    @Prop({required: true})
    name: string;

    @Prop({unique: true})
    email: string;

    @Prop({required: true})
    age: number;

    @Prop({type: Date, default: Date.now})
    createdAt: Date;

}



export const UserSchema =   SchemaFactory.createForClass(User);