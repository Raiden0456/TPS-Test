import { TypeValidate, Validate } from '@common/decorators/validation.helpers'

export class UpdateScheduleDto {
    @Validate(TypeValidate.STRING, { required: false })
    start_time?: string

    @Validate(TypeValidate.STRING, { required: false })
    end_time?: string
}
