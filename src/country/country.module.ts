import { Module } from '@nestjs/common';
import { CountryController } from './country.controller';
import { CountryService } from './country.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CountryRepository } from './country.repository';

@Module({
  imports:[TypeOrmModule.forFeature([CountryRepository])],
  controllers: [CountryController],
  providers: [CountryService]
})
export class CountryModule {}
