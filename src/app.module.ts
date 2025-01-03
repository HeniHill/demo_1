import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { IncidentModule } from './incident/incident.module';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { CacheModule } from '@nestjs/cache-manager';



@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/demo'),
    UserModule,
    IncidentModule,
     CacheModule.register(
                {
                    ttl:60,  // time to live
                    max:100, // No of max entries
                    isGlobal:true // apply the cache to all the requests
                }
              )
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
