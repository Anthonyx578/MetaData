import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioMetadata } from './usuarios/usuarios.entity';
import { DataBaseBackModule } from './data-base-back/data-base-back.module';
import { ReportingModule } from './reporting/reporting.module';
import { ProceduresModule } from './procedures/procedures.module';

@Module({
  imports: [TypeOrmModule.forRoot({
      type:'postgres',
      host:'localhost',
      port:5432,
      username:'Anthony',
      password:'2002',
      database:'MetaDataTransportePublico',
      entities:[UsuarioMetadata]
    }),
    UsuariosModule,
    DataBaseBackModule,
    ReportingModule,
    ProceduresModule,
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
