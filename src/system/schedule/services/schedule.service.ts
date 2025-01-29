import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateScheduleDto } from '../dto/create-schedule.dto'
import { UpdateScheduleDto } from '../dto/update-schedule.dto'
import { Schedule } from '../entity/schedule.entity'

@Injectable()
export class ScheduleService {
    constructor(
        @InjectRepository(Schedule) private readonly scheduleRepository: Repository<Schedule>,
    ) {}

    async createSchedule(dto: CreateScheduleDto) {
        return await this.scheduleRepository.save(dto)
    }

    async updateSchedule(uuid: string, dto: UpdateScheduleDto) {
        await this.scheduleRepository.update(uuid, dto)
        return await this.scheduleRepository.findOne({ where: { uuid } })
    }

    async getAllSchedules() {
        return await this.scheduleRepository.find()
    }

    async isServiceEnabled(currentTime: Date): Promise<boolean> {
        const schedules = await this.getAllSchedules()
        const currentDay = currentTime.toLocaleString('en-US', { weekday: 'long' })
        const currentTimeString = currentTime.toTimeString().split(' ')[0]

        for (const schedule of schedules) {
            const { day, start_time, end_time } = schedule
            if (day === currentDay && start_time <= currentTimeString && end_time >= currentTimeString) {
                return true
            }
        }
        return false
    }
}
