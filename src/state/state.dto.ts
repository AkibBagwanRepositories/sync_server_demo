import { IsString, } from "class-validator";
export class StateDto{  
    
    @IsString()
    country_id: string;

    @IsString()
    name: string;
}