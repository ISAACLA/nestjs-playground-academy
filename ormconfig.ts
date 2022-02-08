import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const AppConfig: PostgresConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'password',
  database: 'playground',
  // entities: ['src/**/entities/*.entity{.ts, .js}'],
  // entities: ['dist/src/**/entity/*.entity.js'],
  // entities: ['dist/src/**/entities/*.entity.js'],
  entities: [__dirname + '/dist/src/**/entities/*.entity.js'],
  synchronize: false,
  migrations: ['src/migrations/*.ts'],
  cli: {
    migrationsDir: 'src/migrations',
  },
};

export default AppConfig;
