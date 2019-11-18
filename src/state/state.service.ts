import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StateRepository } from './state.repository';
import { StateDto } from './state.dto';

@Injectable()
export class StateService {
    constructor(
        @InjectRepository(StateRepository)
    private stateRepository : StateRepository){}
    
    async create(createStateDto: Partial<StateDto>){
        return await this.stateRepository.save(createStateDto);
    }
}
