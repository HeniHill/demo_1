import { IsEmail, IsEmpty, IsNotEmpty, IsNumber, isNumber, IsNumberString } from "class-validator";

export class UpdateUserDto{
    
    @IsNotEmpty()
    @IsEmail()
    email: string;
    
    @IsNumber()
    age?: number
}