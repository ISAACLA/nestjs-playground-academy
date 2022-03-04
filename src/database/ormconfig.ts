import { ConnectionOptions } from 'typeorm';
require('dotenv').config();

const ormConfig: ConnectionOptions = {
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  port: parseFloat(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  synchronize: false,
  entities: [__dirname + '/../entities/*.entity.{ts,js}'],
  logging: process.env.NODE_ENV === 'development',
  logger: 'simple-console',
  migrationsRun: true,
  migrations: [__dirname + '/migrations/*.ts'],
  cli: {
    migrationsDir: 'src/database/migrations',
    entitiesDir: 'src/entities',
  },
};

export = ormConfig;
