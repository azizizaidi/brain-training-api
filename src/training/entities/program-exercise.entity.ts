// src/training/entities/program-exercise.entity.ts

import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { TrainingProgram } from './training-program.entity';
import { Exercise } from '../../exercises/entities/exercise.entity';

@Entity('program_exercises')
export class ProgramExercise {
  @PrimaryColumn({ name: 'program_id' })
  programId: string;

  @PrimaryColumn({ name: 'exercise_id' })
  exerciseId: string;

  @PrimaryColumn()
  sequence: number;

  @Column({ default: 1 })
  repetitions: number;

  @Column({ name: 'adaptive_difficulty', default: true })
  adaptiveDifficulty: boolean;

  // Relationships
  @ManyToOne(() => TrainingProgram, (program) => program.programExercises)
  @JoinColumn({ name: 'program_id' })
  program: TrainingProgram;

  @ManyToOne(() => Exercise, (exercise) => exercise.programExercises)
  @JoinColumn({ name: 'exercise_id' })
  exercise: Exercise;
}