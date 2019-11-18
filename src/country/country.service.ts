import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CountryRepository } from './country.repository';
import { CountryDto } from './country.dto';

@Injectable()
export class CountryService {
    constructor(
        @InjectRepository(CountryRepository)
    private countryRepository : CountryRepository){}

    async getAll() {
        const data = await this.countryRepository.find({relations: ['state']});
        if(data.length==0){
            throw new HttpException("No Records!", HttpStatus.NOT_FOUND); 
        }
        return data;
    }
    async create(createCountryDto: Partial<CountryDto[]>){
        // const country = await this.countryRepository.save(createCountryDto);
        // createCountryDto.state.forEach(state=>state.country_id=country.id)
        return await this.countryRepository.save(createCountryDto);
    }
}
