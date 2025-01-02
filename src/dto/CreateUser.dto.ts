import { IsEmail, IsEnum, IsNotEmpty, IsNumberString } from "class-validator";
import { departments } from "src/schemas/user.schema";

export class CreateUserDto{

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsNumberString()
    age: number

    @IsNotEmpty()
    @IsEnum(departments)
    department: departments
}