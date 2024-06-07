import { Module } from '@nestjs/common';
import { UsuariosController } from './usuarios.controller';
import { UsuariosService } from './usuarios.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioMetadata } from './usuarios.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UsuarioMetadata])],
  controllers: [UsuariosController],
  providers: [UsuariosService]
})
export class UsuariosModule {}
