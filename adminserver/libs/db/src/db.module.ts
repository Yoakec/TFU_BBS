import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../entity/user.entity';
import { DbService } from './db.service';

const dbmodel =  TypeOrmModule.forFeature([User,])

@Global()
@Module({
  imports:[
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '123456',
      database: 'data',
      synchronize: true,
      autoLoadEntities: true,
    }),dbmodel
  ],
  providers: [DbService],
  exports: [DbService,dbmodel],
})
export class DbModule {}
