import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { IncidentModule } from './incident/incident.module';
import { ClientsModule, Transport } from '@nestjs/microservices';



@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/demo'),
    UserModule,
    IncidentModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
