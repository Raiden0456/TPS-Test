import { TypeValidate, Validate } from '@common/decorators/validation.helpers'

export class CreateScheduleDto {
    @Validate(TypeValidate.STRING)
    day: string

    @Validate(TypeValidate.STRING)
    start_time: string

    @Validate(TypeValidate.STRING)
    end_time: string
}
