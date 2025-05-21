import { DataSource } from "typeorm";
import { Writer } from "../entities/Writer.entity";
import { Book } from "../entities/Book.entity";

export const AppDataSource = new DataSource({
    type: "sqlite",
    database: "data/db.sqlite",
    synchronize: false,
    logging: false,
    entities: [Writer, Book],
}); 