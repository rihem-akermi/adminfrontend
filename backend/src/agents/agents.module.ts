import { Module } from '@nestjs/common';
import { AgentsService } from './agents.service';
import { AgentsController } from './agents.controller';
import { AgentsRepository } from './agents.repository';

@Module({
  providers: [AgentsService,AgentsRepository],
  controllers: [AgentsController],
})
export class AgentsModule {}
