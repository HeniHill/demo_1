import { Body, Controller, Post } from "@nestjs/common";
import { CreateIncidentDto } from "./dto/CreateIncident.dto";
import { IncidentService } from "./incident.service";

@Controller('incident')
export class IncidentController{

    constructor(private incidentService: IncidentService){}

    @Post()
    createIncident(@Body() incident: CreateIncidentDto){
     return this.incidentService.createIncident(incident);
    }


}