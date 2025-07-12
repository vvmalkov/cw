import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecordsService } from './record/records.service';
import { RecordsController } from './record/records.controller';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';

@Module({
  imports: [],
  controllers: [AppController, RecordsController, AuthController],
  providers: [AppService, RecordsService, AuthService],
})
export class AppModule {}
