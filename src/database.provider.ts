import { ConfigService } from '@nestjs/config'
import { DataSourceOptions } from 'typeorm'

import { Schedule } from './system/schedule/entity/schedule.entity'
import { Session } from './system/user/entity/session.entity'
import { User } from './system/user/entity/user.entity'

export const buildDataSourceOptions = (configService: ConfigService): DataSourceOptions => ({
    type: 'postgres',
    host: configService.get('DATABASE_HOST'),
    port: configService.get('DATABASE_PORT'),
    username: configService.get('DATABASE_USER'),
    password: configService.get('DATABASE_PASSWORD'),
    database: configService.get('DATABASE_DB'),
    entities: [User, Session, Schedule],
    migrations: ['dist/src/database/migrations/*.js'],
    logging: true,
    synchronize: true,
})
