import {
  ClassSerializerInterceptor,
  ConsoleLogger,
  Module,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProfilesModule } from './modules/profiles/profiles.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KinotebookConfigService } from './config/database/databases.config.services';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MoviesModule } from './modules/movies/movies.module';
import { PersonsModule } from './modules/persons/persons.module';
import { GenresModule } from './modules/genres/genres.module';
import { LanguagesModule } from './modules/languages/languages.module';
import { ReleasesModule } from './modules/releases/releases.module';
import { FunctionsModule } from './modules/functions/functions.module';
import { CrewsModule } from './modules/crews/crews.module';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { FilterHttpException } from './filters/filter.http.exceptions';
import { CacheModule } from '@nestjs/cache-manager';

import * as redisStore from 'cache-manager-redis-store';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';
import { CountriesModule } from './modules/countries/countries.module';
import { StudiosModule } from './modules/studios/studios.module';
import { ReviewsModule } from './modules/reviews/reviews.module';
import { LoggerGlobalInterceptor } from './interceptor/logger.global.interceptor';
import { GoogleCloudStorageService } from './modules/google-cloud-storage/google.cloud.storage.service'; 
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
    ReviewsModule,
    CacheModule.registerAsync({
      useFactory: (configService: ConfigService) => ({
        store: redisStore,
        host: configService.get<string>('REDIS_HOST'),
        port: configService.get<number>('REDIS_PORT'),
        ttl: configService.get<number>('REDIS_TTL'),
      }),
      inject: [ConfigService],
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: FilterHttpException,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggerGlobalInterceptor,
    },
    ConsoleLogger
  ],
})
export class AppModule {}
