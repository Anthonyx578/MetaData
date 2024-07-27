import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('Servidor')
  const config = new DocumentBuilder()
  .setTitle('Transporte Publico MetaDataAPI')
  .setDescription('Postgrest MetaData API')
  .setVersion('1.0')
  .build();

  const Document = SwaggerModule.createDocument(app,config);
  SwaggerModule.setup('api',app,Document,{
    swaggerOptions: {
      docExpansion: 'none',
      filter: true,
      tryItOutEnabled: true, // Esto hace que los controladores no se desplieguen por defecto
    },
  });

  await app.listen(3000);
  logger.log('Servidor Ejecutandose en http://localhost:3000')
  logger.log('Swagger API Ejecutandose en http://localhost:3000/api')
}
bootstrap();
