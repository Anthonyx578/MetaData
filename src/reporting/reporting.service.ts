import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Any, Repository } from 'typeorm';
import { Tables } from './Tables.entity';
import { ApiTags } from '@nestjs/swagger';
import * as PDFDocument from 'pdfkit';


@Injectable()
export class ReportingService {
    constructor(@InjectRepository(Tables) private readonly repositorio: Repository<any>){}
    async getAllTables(){
        const tables= await this.repositorio.query("select * from information_schema.tables where table_schema  = 'public'")
        return tables.map(table => ({
            table_catalog: table.table_catalog,
            table_schema: table.table_schema,
            table_name: table.table_name
        }));
    }
    
    async getPropiertiesTable(Table:string){
        const Propierties = await this.repositorio.query(`select * FROM information_schema.columns where table_name  = '${Table}'`)
        return Propierties.map(propiedad =>({
            propiedad: propiedad.column_name
        }))
    }

/*
    async generatePdf(tableName: string): Promise<Buffer> {
        const rows = await this.repositorio.query(`SELECT * FROM ${tableName}`);
        
        if (rows.length === 0) {
          throw new Error(`Table ${tableName} has no data.`);
        }
    
        const doc = new PDFDocument();
        let buffers = [];
        doc.on('data', buffers.push.bind(buffers));
        doc.on('end', () => {});
    
        // Title
        doc.fontSize(16).text(`Reporte de Datos de la tabla: ${tableName}`, {
          align: 'center'
        });
        doc.moveDown();
    
        // Table Header
        const headers = Object.keys(rows[0]);
        doc.fontSize(12).text(headers.join(' | '), {
          underline: true
        });
        doc.moveDown();
    
        // Table Rows
        rows.forEach(row => {
          const rowData = headers.map(header => row[header]).join(' | ');
          doc.text(rowData);
        });
    
        doc.end();
    
        const pdfData = await new Promise<Buffer>((resolve, reject) => {
          doc.on('end', () => {
            resolve(Buffer.concat(buffers));
          });
        });
    
        return pdfData;
      }*/
      async generatePdf(tableName: string): Promise<Buffer> {
        const rows = await this.repositorio.query(`SELECT * FROM ${tableName}`);
    
        if (rows.length === 0) {
            throw new Error(`Table ${tableName} has no data.`);
        }
    
        const doc = new PDFDocument();
        let buffers: Buffer[] = [];
        doc.on('data', buffers.push.bind(buffers));
        doc.on('end', () => {});
    
        // Title
        doc.fontSize(16).text(`Reporte de Datos de la tabla: ${tableName}`, {
            align: 'center'
        });
        doc.moveDown();
    
        // Table Header
        const headers = Object.keys(rows[0]);
        const columnWidths = headers.map(header => {
            const headerWidth = doc.widthOfString(header);
            const maxColumnWidth = Math.max(...rows.map(row => doc.widthOfString(String(row[header]))));
            return Math.max(headerWidth, maxColumnWidth);
        });
    
        // Calculate total width of the table
        const totalWidth = columnWidths.reduce((acc, width) => acc + width, 0);
    
        // Position variables
        let y = doc.y;
        const startX = (doc.page.width - totalWidth) / 2; // Center the table
        let x = startX;
    
        // Draw table header
        headers.forEach((header, i) => {
            doc.font('Helvetica-Bold').fontSize(12).text(header, x, y, {
                width: columnWidths[i],
                align: 'center',
                lineBreak: false
            });
            x += columnWidths[i];
        });
        y = doc.y;
        x = startX; // Reset x position
        doc.moveDown();
    
        // Draw table rows
        rows.forEach(row => {
            y = doc.y;
            headers.forEach((header, i) => {
                doc.font('Helvetica').fontSize(10).text(String(row[header]), x, y, {
                    width: columnWidths[i],
                    align: 'center',
                    lineBreak: false
                });
                x += columnWidths[i];
            });
            x = startX; // Reset x position
            doc.moveDown();
        });
    
        doc.end();
    
        const pdfData = await new Promise<Buffer>((resolve, reject) => {
            doc.on('end', () => {
                resolve(Buffer.concat(buffers));
            });
            doc.on('error', reject);
        });
    
        return pdfData;
    }
}
