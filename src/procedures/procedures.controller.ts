import { Controller, Get, Param } from '@nestjs/common';
import { ProceduresService } from './procedures.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('procedures')
export class ProceduresController {
    constructor(private readonly services:ProceduresService){}
    @ApiTags('Procedures')
    @Get('tarifas')async Tarifas(){
        return await this.services.TarifaCRUD();
    }

    @ApiTags('Procedures')
    @Get('Pasajero') async Pasajeros(){
        return await this.services.PasajeroCRUD();
    }
    @ApiTags('Procedures')
    @Get('Incidente') async Incidente(){
        return await this.services.IncidenteCRUD();
    }
    @ApiTags('Procedures')
    @Get('Cobrador') async Cobrador(){
        return await this.services.CobradorCRUD();
    }
    @ApiTags('Procedures')
    @Get('Conductor') async Conductor(){
        return await this.services.ConductorCRUD();
    }
    @ApiTags('Procedures')
    @Get('Multa') async Multa(){
        return await this.services.MultaCRUD();
    }
    @ApiTags('Procedures')
    @Get('InformeMulta') async InformeMulta(){
        return await this.services.InformeMultaCRUD();
    }
    @ApiTags('Procedures')
    @Get('Linea') async Linea(){
        return await this.services.LineaCRUD();
    }
    @ApiTags('Procedures')
    @Get('Bus') 
    async Bus(){
        return await this.services.BusCRUD(); 
    }
    
    @ApiTags('Procedures')
    @Get('Paradas') 
    async Paradas(){
        return await this.services.ParadasCRUD(); 
    }

    @ApiTags('Procedures')
    @Get('Ruta') 
    async Ruta(){
        return await this.services.RutaCRUD(); 
    } 
    @ApiTags('Procedures')
    @Get('Mantenimiento') 
    async Mantenimiento(){
        return await this.services.MantenimientoCRUD(); 
    } 
    @ApiTags('Procedures')
    @Get('InformeMantenimiento') 
    async InformeMantenimiento(){
        return await this.services.InformeMantenimientoCRUD(); 
    } 
    @ApiTags('Procedures')
    @Get('InformeConductor') 
    async InformeConductor(){
        return await this.services.InformeConductorCRUD(); 
    } 
    @ApiTags('Procedures')
    @Get('Horario') 
    async Horario(){
        return await this.services.HorarioCRUD(); 
    } 
    @ApiTags('Procedures')
    @Get('Viaje') 
    async Viaje(){
        return await this.services.ViajeCRUD(); 
    }
    @ApiTags('Procedures')
    @Get('Acontecimiento') 
    async Acontecimiento(){
        return await this.services.AcontecimientoCRUD(); 
    } 
    @ApiTags('Procedures')
    @Get('RegistroViajes') 
    async RegistroViajes(){
        return await this.services.RegistroViajesCRUD(); 
    } 

}
