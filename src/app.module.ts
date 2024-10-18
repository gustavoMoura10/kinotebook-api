import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ProfilesModule } from './profiles/profiles.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KinotebookConfigService } from './config/database/databases.config.services';
import { ConfigModule } from '@nestjs/config';
import { MoviesModule } from './movies/movies.module';
import { PersonsModule } from './persons/persons.module';
import { CountriesModule } from './countries/countries.module';
import { StudiosModule } from './studios/studios.module';
import { GenresModule } from './genres/genres.module';
import { LanguagesModule } from './languages/languages.module';

import { ReleasesModule } from './releases/releases.module';
import { FunctionsModule } from './functions/functions.module';
import { CrewsModule } from './crews/crews.module';

@Module({
  imports: [
    UsersModule,
    ProfilesModule,
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useClass: KinotebookConfigService,
      inject: [KinotebookConfigService],
    }),
    MoviesModule,
    PersonsModule,
    CountriesModule,
    StudiosModule,
    GenresModule,
    LanguagesModule,
    ReleasesModule,
    FunctionsModule,
    CrewsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
