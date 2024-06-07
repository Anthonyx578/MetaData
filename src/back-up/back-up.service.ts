import { Injectable } from '@nestjs/common';
import {exec} from 'child_process'
import { promisify } from 'util';
@Injectable()
export class BackUpService {
    constructor( private execPromise  = promisify(exec)
){

    }
    async GenerarBack(DataBase:string){
        const NombreArchivo = `respaldo_${DataBase}.sql`
        const comando = `docker exec -t metaDataPostgres pg_dump -U Anthony -d PruebaDataBase -F p > ${NombreArchivo}`
        try {
            await this.execPromise(comando)
            console.log("Se creo backup")
        } catch (error) {
            console.log("Error al crear el Backup"+error)
        }
    }
}
