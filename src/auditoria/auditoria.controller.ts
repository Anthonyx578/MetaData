import { Controller, Get } from '@nestjs/common';
import { AuditoriaService } from './auditoria.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('auditoria')
export class AuditoriaController {
    constructor(private readonly auditoriaService: AuditoriaService) { }
    @ApiTags('Auditoria')
    @Get('create-table')
    async createTable() {
        await this.auditoriaService.createTableIfNotExists();
        return 'Tabla auditoria verificada/creada';
    }

    @ApiTags('Auditoria')
    @Get('generate-triggers')
    async generateTriggers() {
        await this.auditoriaService.generateAndExecuteTriggers();
        return 'Triggers generados y guardados en triggers.sql';
    }
}
