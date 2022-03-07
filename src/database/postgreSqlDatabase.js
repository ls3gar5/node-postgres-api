import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(
    'postgres',
    'postgres', 
    'root',
    {
        host: '127.0.0.1',
        dialect: 'postgres',
        pool:{
            max: 100,
            min:0,
            require:30000,
            idle:200000
        }
    }
)