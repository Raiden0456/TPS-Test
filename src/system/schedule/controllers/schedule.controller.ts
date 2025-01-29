import { Body, Controller, Param } from '@nestjs/common'
import { ApiTags } from '@nestjs/swagger'

import { UserAuthType } from '@common/decorators/auth.helpers'
import {
    UserDockGetManyNotPaginate,
    UserDockGetOne,
    UserDockPost,
    UserDockPut,
} from '@common/swagger/user.swagger.helper'
import { CreateScheduleDto } from '../dto/create-schedule.dto'
import { UpdateScheduleDto } from '../dto/update-schedule.dto'
import { Schedule } from '../entity/schedule.entity'
import { ScheduleService } from '../services/schedule.service'

@Controller('schedule')
@ApiTags('Schedule')
export class ScheduleController {
    constructor(private readonly scheduleService: ScheduleService) {}

    @UserDockPost('create', UserAuthType.ADMIN, CreateScheduleDto, Schedule)
    async createSchedule(@Body() dto: CreateScheduleDto) {
        return this.scheduleService.createSchedule(dto)
    }

    @UserDockPut('update/:uuid', UserAuthType.ADMIN, UpdateScheduleDto, Schedule)
    async updateSchedule(@Param('uuid') uuid: string, @Body() dto: UpdateScheduleDto) {
        return this.scheduleService.updateSchedule(uuid, dto)
    }

    @UserDockGetManyNotPaginate('', UserAuthType.NOT_AUTH, Schedule)
    async getAllSchedules() {
        return this.scheduleService.getAllSchedules()
    }

    @UserDockGetOne('check', UserAuthType.NOT_AUTH, Boolean)
    async checkServiceAvailability() {
        const currentTime = new Date()
        const isEnabled = await this.scheduleService.isServiceEnabled(currentTime)
        return { isEnabled }
    }
}
