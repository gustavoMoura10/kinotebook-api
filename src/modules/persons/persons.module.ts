import { Module } from '@nestjs/common';
import { PersonsService } from './persons.service';
import { PersonsController } from './persons.controller';
import { PersonEntity } from './person.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GoogleCloudStorageService } from '../google-cloud-storage/google.cloud.storage.service';


@Module({
  imports: [TypeOrmModule.forFeature([PersonEntity])],
  controllers: [PersonsController],
  providers: [PersonsService,GoogleCloudStorageService],
})
export class PersonsModule {}
