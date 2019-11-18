import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CountryModule } from './country/country.module';
import { StateController } from './state/state.controller';
import { StateModule } from './state/state.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    name: 'default',
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'akib',
      password: 'root',
      database: 'sync_demo',
      synchronize: true,
      dropSchema: true,
      logging: true,
      entities: [__dirname + '/**/**.entity{.ts,.js}']
  }), CountryModule, StateModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
