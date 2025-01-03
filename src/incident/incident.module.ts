import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Incident, IncidentSchema } from "./schemas/incident.schema";
import { IncidentController } from "./incident.controller";
import { IncidentService } from "./incident.service";
import { User, UserSchema } from "src/user/schemas/user.schema";
import { ClientsModule, Transport } from "@nestjs/microservices";

@Module({
    imports: [
        MongooseModule.forFeature([
            {name: Incident.name, schema: IncidentSchema},
            {name: User.name, schema: UserSchema},
        ]),
        ClientsModule.register([
            {
                name: 'INCIDENT_SERVICE',
                transport: Transport.TCP,
                options: {
                    host: 'localhost',
                    port: 3001 // Listener Port
                }
            }
        ])
    ],
    controllers: [IncidentController],
    providers: [IncidentService]
})
export class IncidentModule{

}