import { IsEnum, isEnum, IsNotEmpty, MaxLength } from "class-validator";
import { isReadable } from "stream";
import { priority } from "../schemas/incident.schema";


export class CreateIncidentDto {

    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    @MaxLength(200)
    description: string;  
    
    @IsEnum(priority)
    priority: priority;

    @IsNotEmpty()
    userId: string;
}