import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ScheduleController } from './controllers/schedule.controller'
import { Schedule } from './entity/schedule.entity'
import { ScheduleService } from './services/schedule.service'

@Module({
    imports: [TypeOrmModule.forFeature([Schedule])],
    controllers: [ScheduleController],
    providers: [ScheduleService],
    exports: [ScheduleService],
})
export class ScheduleModule {}
