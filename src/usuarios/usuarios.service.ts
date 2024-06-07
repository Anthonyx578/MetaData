import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsuarioMetadata } from './usuarios.entity';

@Injectable()
export class UsuariosService {
    constructor(@InjectRepository(UsuarioMetadata)
    private readonly repositorio: Repository<any>,
){}
    async ObtenerUR(){
        try {
            const UR = await this.repositorio.query("select rolname from pg_roles")
        return UR    
        } catch (error) {
            console.log(error)
        }
         
    }
    async ObtenerUsuario(){
        try {
            const Usuarios =await this.repositorio.query("select * from pg_catalog.pg_roles where rolcanlogin=TRUE")    
            return Usuarios
        } catch (error) {
            console.log(error)
        } 
    }
    async ObtenerRoles(){
        try {
            const Roles = await this.repositorio.query("select * from pg_catalog.pg_roles where rolcanlogin=FALSE")
            return Roles
        } catch (error) {
            console.log(error)
        }
    }

    async CrearRol(NombreRol:string){
        try {
            const Rol = await this.repositorio.query(`CREATE ROLE ${NombreRol}`)
            return Rol
        } catch (error) {
            console.log(error)
        }
    }
    async EliminarRU(UR:string){
        try {
            const RU = await this.repositorio.query(`DROP ROLE ${UR}`)
            return RU
        } catch (error) {
            console.log(error)
        }
    }
    async ActualizarRu(RU:string,Pass:string){
        const Actualizacion = await this.repositorio.query(`ALTER ROLE ${RU} WITH PASSWORD '${Pass}'`)
        return Actualizacion
    }

    async CrearUsuario(Nombre:string,Pass:string,Rol:string){
        try {
            const Creacion = await this.repositorio.query(`CALL create_user_and_assign_role($1, $2, $3)`,[Nombre,Pass,Rol])
        } catch (error) {
            console.log(error)
        }
    }
}
