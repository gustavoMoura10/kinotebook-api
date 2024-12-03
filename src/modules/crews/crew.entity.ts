import { CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { PersonEntity } from "../persons/person.entity";
import { FunctionEntity } from "../functions/function.entity";
import { MovieEntity } from "../movies/movie.entity";

@Entity('crews')
export class CrewEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => PersonEntity, (person) => person.crews)
    @JoinColumn({ name: 'person_id' })
    person: PersonEntity;

    @ManyToOne(() => MovieEntity, (movie) => movie.crews)
    @JoinColumn({ name: 'movie_id' })
    movie: MovieEntity;

    @ManyToOne(() => FunctionEntity, (func) => func.crews)
    @JoinColumn({ name: 'function_id' })
    function:FunctionEntity;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;
  
    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;
  
    @DeleteDateColumn({ name: 'deleted_at' })
    deletedAt: Date;
}
