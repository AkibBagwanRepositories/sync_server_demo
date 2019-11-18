import {BaseEntity,Column,Entity, OneToMany} from "typeorm";
import { State } from "./state.entity";


@Entity("Country",{schema:"public" } )
export class Country{

    @Column("uuid",{ 
        nullable:false,
        primary:true,
        default: () => "gen_random_uuid()",
        name:"id"
        })
    id:string;
        

    @Column("character varying",{ 
        nullable:false,
        unique: true,
        name:"name"
        })
    name:string;

    @OneToMany(type => State, State => State.country,{ cascade: ['insert', 'update'] })
    state:State[];
}
