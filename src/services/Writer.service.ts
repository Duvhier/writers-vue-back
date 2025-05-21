import { WriterRepo } from "../repositories/Writer.repository";
import { Writer } from "../entities/Writer.entity";
export class WriterService {
    async createWriter(data: Partial<Writer>): Promise<Writer> {
        const w = WriterRepo.create(data);        
        return WriterRepo.save(w);                
    }
    async getAllWriters(): Promise<Writer[]> {
        return WriterRepo.find({ relations: ["books"] }); 
    }
} 