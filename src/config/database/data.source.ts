import 'dotenv/config';
import { DataSource, DataSourceOptions } from 'typeorm';
console.log(process.env['DATABASE_HOST'])
export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env['DATABASE_HOST'],
  port: Number(process.env['DATABASE_PORT']),
  username: process.env['DATABASE_USERNAME'],
  password: process.env['DATABASE_PASSWORD'],
  database: process.env['DATABASE_NAME'],
  entities: [__dirname + '/../../**/*.entity.{js,ts}'],
  migrations: [__dirname + '/migrations/*.{js,ts}'],
  logging: true
};
const AppDataSource = new DataSource(dataSourceOptions);

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });
export default AppDataSource;
