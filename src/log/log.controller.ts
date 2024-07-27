import { Body, Controller, Post, Get, Param, Res } from '@nestjs/common';
import { LogService } from './log.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Log } from './log.entity';
import { Response } from 'express';
import * as fs from 'fs';
import * as PDFDocument from 'pdfkit';

@Controller('log')
export class LogController {
    constructor(private readonly logsService: LogService) { }

    @ApiTags('Logs')
    @Post('import')
    async importLogs(): Promise<void> {
        let filePath = 'C:\\Program Files\\PostgreSQL\\16\\data\\pg_log\\postgresql.log'
        await this.logsService.importLogs(filePath);
    }

    @ApiTags('Logs')
    @Get()
    async getAllLogs(): Promise<Log[]> {
        return this.logsService.findAll();
    }
    @ApiTags('Logs')
    @ApiOperation({
        summary:'Consultar por parametro de atributo',
        description:'Columnas: log_time , timezone , process_id , log_level , message n\ log_level:  LOG , DETALLE '
    })
    @Get(':column/:value')
    async getLogsByFilter(@Param('column') column: string, @Param('value') value: string): Promise<Log[]> {
        return this.logsService.findWithFilter(column, value);
    }
    @ApiTags('Logs')
    @ApiOperation({
        summary:'Consultar por parametro de atributo y Descargar',
        description:'Columnas: log_time , timezone , process_id , log_level , message  log_level:  LOG , DETALLE '
    })
    @Get('download/:column/:value')
    async downloadLogsAsPDF(
      @Param('column') column: string,
      @Param('value') value: string,
      @Res() res: Response
    ): Promise<void> {
      const logs = await this.logsService.findWithFilter(column, value);
      const doc = new PDFDocument();
  
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', 'attachment; filename=logs.pdf');
  
      doc.pipe(res);
  
      logs.forEach(log => {
        doc.text(JSON.stringify(log));
      });
  
      doc.end();
    }


}


