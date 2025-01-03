import { Body, Controller, Inject, Post } from "@nestjs/common";
import { CreateIncidentDto } from "./dto/CreateIncident.dto";
import { IncidentService } from "./incident.service";
import { ClientProxy } from "@nestjs/microservices";

@Controller('incident')
export class IncidentController{

    constructor(
        private incidentService: IncidentService,
        @Inject('INCIDENT_SERVICE') private readonly client: ClientProxy
    ){}

    onApplicationBootstrap(){
     this.client.connect();
    }

    @Post()
    createIncident(@Body() incident: CreateIncidentDto){
     return this.incidentService.createIncident(incident);
    }


}