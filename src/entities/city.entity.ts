import {BaseEntity,Column,Entity,OneToMany} from "typeorm";
import { State } from "./state.entity";


@Entity("City",{schema:"public" } )
export class City{

    @Column("uuid",{ 
        nullable:false,
        primary:true,
        default: () => "gen_random_uuid()",
        name:"id"
        })
    id:string;
    
    @OneToMany(type => State, State => State.id)
    state_id:string;
        

    @Column("character varying",{ 
        nullable:false,
        unique: true,
        name:"name"
        })
    name:string;
}
