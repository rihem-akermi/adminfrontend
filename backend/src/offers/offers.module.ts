import { Module } from '@nestjs/common';
import { OffersService } from './offers.service';
import { OffersController } from './offers.controller';
import { OffersRepository } from './offers.repository';

@Module({
  providers: [OffersService,OffersRepository],
  controllers: [OffersController]
})
export class OffersModule {}
