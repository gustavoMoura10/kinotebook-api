import { Module } from '@nestjs/common';
import { CrewsController } from './crews.controller';
import { CrewsService } from './crews.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CrewEntity } from './crew.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CrewEntity])],
  controllers: [CrewsController],
  providers: [CrewsService],
})
export class CrewsModule {}
