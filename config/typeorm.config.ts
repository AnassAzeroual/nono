import { TypeOrmModuleOptions } from "@nestjs/typeorm";

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "auclairm_espaceclient",
    entities: ['entities/*{.ts,.js}'],
    migrations: ['migrations/*{.ts,.js}'],
    synchronize: true,
    cli: {
        migrationsDir: "migration"
    }
}