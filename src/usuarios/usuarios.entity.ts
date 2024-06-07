import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity({name:'pg_roles'})
export class UsuarioMetadata{
    @PrimaryColumn({name:"oid"})
    id: string;
    @Column()
    p_username:string;
    @Column()
    p_password:string;
    @Column()
    p_role_name:string;
}