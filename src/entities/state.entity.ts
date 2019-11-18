import {BaseEntity,Column,Entity, ManyToOne} from "typeorm";
import { Country } from "./country.entity";


@Entity("State",{schema:"public" } )
export class State{

    @Column("uuid",{ 
        nullable:false,
        primary:true,
        default: () => "gen_random_uuid()",
        name:"id"
        })
    id:string;
    
    @ManyToOne(type => Country, Country => Country,{ cascade: ['insert', 'update'] })
    country:Country;
        

    @Column("character varying",{ 
        nullable:false,
        name:"name"
        })
    name:string;
}
