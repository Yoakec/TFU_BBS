import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { User } from 'libs/db/entity/user.entity';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  //静态托管
  app.useStaticAssets('uploads',{
    prefix:'/uploads'
  })
  app.enableCors();
  
  const config = new DocumentBuilder()
    .setTitle('AdminServer Api')
    .setDescription('The AdminServer API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, config,{
    extraModels: [User]
 });
  SwaggerModule.setup('api/docs', app, document);
  await app.listen(3000);
  console.log('http://localhost:3000/api/docs');
  
}
bootstrap();
