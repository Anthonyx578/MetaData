import { Controller, Get, Param, Post, Res } from '@nestjs/common';
import { ReportingService } from './reporting.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Response } from 'express';

@Controller('reporting')
export class ReportingController {
    constructor(private readonly servicio:ReportingService){}
    @ApiTags('Reportes')
    @ApiOperation({
      summary: 'Todas las Tablas por metadata',
    })
    @Get()async Tablas(){
        return this.servicio.getAllTables();
    }
    @ApiTags('Reportes')
    @ApiOperation({
      summary: 'Propiedades de la tabla por metadata',
    })
    @Get(':Tabla')async Propiedades(@Param('Tabla')Tabla:string){
        return this.servicio.getPropiertiesTable(Tabla);
    }
    @ApiTags('Reportes')
    @ApiOperation({
      summary: 'Reporte PDF de la tabla',
    })
    @Get(':tableName/pdf')
    async getTablePdf(@Param('tableName') tableName: string, @Res() res: Response) {
      try {
        const pdf = await this.servicio.generatePdf(tableName);
        res.set({
          'Content-Type': 'application/pdf',
          'Content-Disposition': `attachment; filename=${tableName}.pdf`,
          'Content-Length': pdf.length,
        });
        res.end(pdf);
      } catch (error) {
        res.status(400).send({ message: error.message });
      }
    }


}
