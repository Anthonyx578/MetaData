import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({name:'information_schema.tables'})
export class Tables{
    @PrimaryColumn({name:"table_catalog"})
    table_catalog: string;
    @Column()
    table_schema:string;
    @Column()
    table_name:string;
}