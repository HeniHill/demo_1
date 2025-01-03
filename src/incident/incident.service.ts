import { HttpException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Incident } from "./schemas/incident.schema";
import { Model } from "mongoose";
import { CreateIncidentDto } from "./dto/CreateIncident.dto";
import { User } from "src/user/schemas/user.schema";

@Injectable()
export class IncidentService{
    constructor(
        @InjectModel(Incident.name) private incidentModel: Model<Incident>,
        @InjectModel(User.name) private userModel: Model<User>,
){}

async createIncident({userId, ...incident}:CreateIncidentDto): Promise<Incident>{
    
    // find if the user exist
    const user = await this.userModel.findById(userId);
    console.log(userId);

    if(!user) throw new HttpException('User not found',404);

    // crate incident based on DTO
    const newincident= new this.incidentModel(incident);
    await newincident.save();

    // Link user with Incident

    await user.updateOne({
        $push:{incidents:newincident._id}
    }).exec();

    return newincident;

}

}