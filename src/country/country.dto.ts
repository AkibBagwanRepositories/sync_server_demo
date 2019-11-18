import { IsString, } from "class-validator";
import { StateDto } from "src/state/state.dto";
export class CountryDto{  
    @IsString()
    name: string;
    state: StateDto[];
}