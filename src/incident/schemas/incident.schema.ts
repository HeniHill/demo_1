import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


export enum priority{
    low = 'low',
    medium = 'medium',
    high = 'high'
}

export enum status{
    open = 'open',
    assigned = 'assigned',
    inProgress = 'inProgress',
    closed = 'closed'
}

@Schema()
export class Incident {


    @Prop({required: true})
    title: string;

    @Prop({required: false})
    description: string;

    @Prop({required: false,default: status.open})
    status: string;

    @Prop({required: false,default: priority.low})
    priority: priority;


}


export const IncidentSchema =   SchemaFactory.createForClass(Incident);