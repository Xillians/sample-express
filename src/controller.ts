import * as dotenv from 'dotenv';
dotenv.config();
const env = process.env;

export const environment = {
    port: env.PORT ? env.PORT : 4500
}