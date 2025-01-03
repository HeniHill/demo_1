import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { IncidentModule } from './incident/incident.module';



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
