import { Controller, Param, Post } from '@nestjs/common';
import { BackUpService } from './back-up.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('back-up')
export class BackUpController {
    constructor(private readonly servicios:BackUpService)
    {}

    @ApiTags('BackUP')
    @Post(':DataBase') async GenerarSQL (@Param('DataBase')DataBase:string){
        return await this.servicios.GenerarBack(DataBase)
    }
}
