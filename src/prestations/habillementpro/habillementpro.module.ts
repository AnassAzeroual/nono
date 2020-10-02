import { Module } from '@nestjs/common';
import { HabillementproController } from './habillementpro.controller';
import { HabillementproService } from './habillementpro.service';

@Module({
  controllers: [HabillementproController],
  providers: [HabillementproService]
})
export class HabillementproModule {}
