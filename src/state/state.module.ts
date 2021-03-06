import { Module } from '@nestjs/common';
import { StateService } from './state.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StateRepository } from './state.repository';
import { StateController } from './state.controller';

@Module({
  imports:[TypeOrmModule.forFeature([StateRepository])],
  controllers: [StateController],
  providers: [StateService]
})
export class StateModule {}

