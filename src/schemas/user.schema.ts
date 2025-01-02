import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export enum departments{
    IT = 'IT',
    HR = 'HR',
    FINANCE = 'FINANCE',
    MARKETING = 'MARKETING',
    IT_SECURITY_INCIDENT = 'IT_SECURITY_INCIDENT'

}

@Schema()
export class User{

    @Prop({required: true})
    name: string;

    @Prop({unique: true})
    email: string;

    @Prop({required: true})
    age: number;

    @Prop({required: true})
    department: departments;

    @Prop({type: Date, default: Date.now})
    createdAt: Date;

}



export const UserSchema =   SchemaFactory.createForClass(User);