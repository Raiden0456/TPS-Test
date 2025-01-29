import { ConfigService } from '@nestjs/config'
import { config } from 'dotenv'
import { DataSource } from 'typeorm'
import { buildDataSourceOptions } from '../database.provider'
config()

const configService = new ConfigService()
export const AppDataSource = new DataSource(buildDataSourceOptions(configService))

AppDataSource.initialize()
    .then(() => console.log('DataSource initialized'))
    .catch((err) => console.error('Error initializing DataSource', err))
