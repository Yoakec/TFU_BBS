import { DbModule } from '@app/db';
import { UpModule } from '@app/up';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule,DbModule,UpModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
