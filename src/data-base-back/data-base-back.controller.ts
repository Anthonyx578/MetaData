import { Controller, Get, Param, Post } from '@nestjs/common';
import { DataBaseBackService } from './data-base-back.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Data } from 'phaser';

@Controller('data-base-back')
export class DataBaseBackController {
    constructor(private readonly Servicios:DataBaseBackService){}

    @ApiTags('BackUp')
    @ApiOperation({
        summary: 'BackUp de la base de datos',
        description:'Crea un archivo Sql de restauracion en base al nombre de la Base de Datos  //Nombre Base de Datos:MetaDataTransportePublico'
    })
    @Get(':DataBase')async HacerBackUP(@Param('DataBase')DataBase:string){
        return await this.Servicios.HacerBackUp(DataBase);
    }

    @ApiTags('BackUp')
    @ApiOperation({
        summary:'Crear Base de Datos para BackUP',
        description:'Para crear una Base de Datos Nueva si no existe o se requiera para receptar el Backup'
    })
    @Post(':DataBase')async CrearDataBase(@Param('DataBase')DataBase:string){
        return await this.Servicios.CrearDataBase(DataBase);
    }

    @ApiTags('BackUp')
    @Post(':DataBase/:NewDataBase') async Backup(@Param('DataBase')DataBase:string,@Param('NewDataBase')NewDataBase:string){
        console.log("Ingreso al controlador");
        const BackUp =  await this.Servicios.BackUp(DataBase,NewDataBase);
        return BackUp
    }
}
