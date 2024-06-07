import { Inject, Injectable } from '@nestjs/common';
import { exec } from 'child_process';
import { log } from 'console';
import { EXEC_PROMISE } from 'src/Exec/Exec';

@Injectable()
export class DataBaseBackService {
    constructor(@Inject(EXEC_PROMISE) private execPromise: any){}
    async HacerBackUp(DataBase:string){
        const NombreArchivo = `respaldo_${DataBase}.sql`
        const CrearBackUp = `docker exec -t metaDataPostgres pg_dump -U Anthony -d ${DataBase} -F p > ${NombreArchivo}`
        const CopiarSql=  `docker cp ${NombreArchivo} metaDataPostgres:/${NombreArchivo}`
        try {
            await this.execPromise(CrearBackUp)
            await this.execPromise(CopiarSql)
            return "Se creo backup de "+DataBase
        } catch (error) {
            console.log("Error al crear el Backup"+error)
        }
    }
    async CrearDataBase(DataBase:string){
        try {
            const CreadDb = `docker exec -t metaDataPostgres createdb -U Anthony -h localhost ${DataBase}`
            await this.execPromise(CreadDb)
            return "Se creo la base de datos "+DataBase
        } catch (error) {
            console.log("Error al crear la BD "+error)
        }
    }
    
    async BackUp(DataBase, NewDataBase) {
        try {
            console.log("Entro al servicio BackUP");
            const archivo = `respaldo_${DataBase}.sql`;
            console.log(archivo)
            const comando = `docker exec -t metaDataPostgres psql -U Anthony -h localhost -d ${NewDataBase} -f /${archivo}`;
            console.log(comando)
            console.log("Antes de la ejecución del comando");
    
            await exec(comando);
    
            console.log("Después de la ejecución del comando");
    
            return 
        } catch (error) {
            console.error(error);
            throw error; // Si necesitas propagar el error para manejarlo en otro lugar
        }
    }
    /*
    async BackUp(DataBase:string,NewDataBase:string){
        try {
            console.log("Entro al servicio BackUP")
            const archivo = `respaldo_${DataBase}.sql`
            //psql -U Anthony -h localhost -d PruebaDataBase -f /respaldo_MetaDataTransportePublico.sql
            const BackUp = `docker exec -t metaDataPostgres psql -U Anthony -h localhost -d ${NewDataBase} -f /${archivo}`
            //const BackUp = `docker exec -t metaDataPostgres psql -U Anthony -h localhost -d PruebaDataBase -f /respaldo_MetaDataTransportePublico.sql`
            console.log("Antes de la ejecucion del comando")
            //const Ejecucion= await this.execPromise(BackUp)
            const EJecutar = await this.execPromise(BackUp);
            console.log("Despues de la ejecucion del comando")
            return EJecutar

        } catch (error) {
            console.log(error)
        }
    }*/
    
    
}
