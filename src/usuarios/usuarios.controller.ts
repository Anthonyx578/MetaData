import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('usuarios')
export class UsuariosController {
    constructor (private readonly servicios:UsuariosService ){}
    @ApiTags('Usuarios/Roles')
    @ApiOperation({
        summary: 'Listar Usuarios y Roles sin Filtro',
      })
    @Get()  async BuscarUsuariosRoles (){
        const UsuariosRoles =await this.servicios.ObtenerUR();
        return UsuariosRoles
    }
    @ApiTags('Usuarios/Roles')
    @ApiOperation({
        summary: 'Listar solo los usuarios',
      })
    @Get('usuarios') async BuscarUsuarios (){
        const Usuarios = await this.servicios.ObtenerUsuario();
        return Usuarios;
    }
    @ApiTags('Usuarios/Roles')
    @ApiOperation({
        summary: 'Listar solo roles',
      })
    @Get('roles') async BuscarRoles (){
        const Roles = await this.servicios.ObtenerRoles();
        return Roles
    }

    @ApiTags('Usuarios/Roles')
    @ApiOperation({
        summary: 'Crear Rol',
      })
    @Post(':Rolname') async CrearRol(@Param('Rolname')Rolname:string){
        const Rol = await this.servicios.CrearRol(Rolname);
        return Rol;
    } 
    @ApiTags('Usuarios/Roles')
    @ApiOperation({
        summary: 'Eliminar Roles o Usuarios(Requiere Nombre)',
      })
    @Delete(':RU') async EliminarRU(@Param('RU')RU:string){
        const Eliminacion = await this.servicios.EliminarRU(RU);
        return Eliminacion; 
    }
    @ApiTags('Usuarios/Roles')
    @ApiOperation({
        summary: 'Actualizar Contraseña de Usuario',
      })
    @Put(':RU/:Password')async ActualizarU(@Param('RU')RU:string,@Param('Password')Pass:string){
        const Actualizacion = await this.servicios.ActualizarRu(RU,Pass)
        return Actualizacion;
    }
    @ApiTags('Usuarios/Roles')
    @ApiOperation({
        summary: 'Crear los usuarios',
      })
    @Post(':User/:Pass/:Rol') async CrearUsuario( @Param('User')Usuario:string,@Param('Pass')Pass:string,@Param('Rol')Rol:string){
        return this.servicios.CrearUsuario(Usuario,Pass,Rol);
    }
        
}