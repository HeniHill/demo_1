import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Incident, IncidentSchema } from "./schemas/incident.schema";
import { IncidentController } from "./incident.controller";
import { IncidentService } from "./incident.service";
import { User, UserSchema } from "src/user/schemas/user.schema";

@Module({
    imports: [
        MongooseModule.forFeature([
            {name: Incident.name, schema: IncidentSchema},
            {name: User.name, schema: UserSchema},
        ])
    ],
    controllers: [IncidentController],
    providers: [IncidentService]
})
export class IncidentModule{

}