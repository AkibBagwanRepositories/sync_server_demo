import { Controller,Get, Post, UsePipes, ValidationPipe, Body } from '@nestjs/common';
import { CountryService } from './country.service';
import { CountryDto } from './country.dto';
import { WrapperDto } from './wrapper.dto';

@Controller('country')
export class CountryController {
    constructor(private countryService:CountryService){}
    
    @Get()
    getAll(){
        return this.countryService.getAll();
    }
    @Post()
    @UsePipes(new ValidationPipe())
    create(@Body() createCountry: Partial<WrapperDto>){
        return this.countryService.create(createCountry.country);
    }
}
