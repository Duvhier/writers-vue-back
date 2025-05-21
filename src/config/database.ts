import { DataSource } from "typeorm";
import { Writer } from "../entities/Writer.entity";
import { Book } from "../entities/Book.entity";

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "db.sqlite",
    synchronize: true,
    logging: false,
    entities: [Writer, Book],
}); 