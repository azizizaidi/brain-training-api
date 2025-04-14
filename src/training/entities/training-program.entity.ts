// src/training/entities/training-program.entity.ts

import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { ProgramExercise } from './program-exercise.entity';
import { UserProgram } from './user-program.entity';

@Entity('training_programs')
export class TrainingProgram {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ default: 1 })
  difficulty: number;

  @Column({ name: 'duration_days' })
  durationDays: number;

  @Column({ name: 'is_premium', default: false })
  isPremium: boolean;

  @Column({ name: 'is_active', default: true })
  isActive: boolean;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp with time zone' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp with time zone' })
  updatedAt: Date;

  // Relationships
  @OneToMany(() => ProgramExercise, (programExercise) => programExercise.program)
  programExercises: ProgramExercise[];

  @OneToMany(() => UserProgram, (userProgram) => userProgram.program)
  userEnrollments: UserProgram[];
}