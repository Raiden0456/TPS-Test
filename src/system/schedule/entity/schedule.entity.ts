import { BaseEntity } from '@common/database/base/base.entity'
import { ApiProperty } from '@nestjs/swagger'
import { Column, Entity } from 'typeorm'

@Entity('schedules')
export class Schedule extends BaseEntity {
    @ApiProperty()
    @Column({ type: 'enum', enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] })
    day: string

    @ApiProperty()
    @Column({ type: 'time' })
    start_time: string

    @ApiProperty()
    @Column({ type: 'time' })
    end_time: string
}
