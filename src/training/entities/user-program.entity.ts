// src/training/entities/user-program.entity.ts

import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { TrainingProgram } from './training-program.entity';
import { ExerciseSession } from '../../exercises/entities/exercise-session.entity';

@Entity('user_programs')
export class UserProgram {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'user_id' })
  userId: string;

  @Column({ name: 'program_id' })
  programId: string;

  @Column({ name: 'start_date', type: 'timestamp with time zone' })
  startDate: Date;

  @Column({ name: 'end_date', type: 'timestamp with time zone', nullable: true })
  endDate: Date;

  @Column({ default: 'active' })
  status: string; // 'active', 'completed', 'abandoned'

  @Column({ name: 'current_day', default: 1 })
  currentDay: number;

  @Column({ type: 'decimal', precision: 5, scale: 2, default: 0 })
  progress: number;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp with time zone' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp with time zone' })
  updatedAt: Date;

  // Relationships
  @ManyToOne(() => User, (user) => user.programEnrollments)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => TrainingProgram, (program) => program.userEnrollments)
  @JoinColumn({ name: 'program_id' })
  program: TrainingProgram;

  @OneToMany(() => ExerciseSession, (session) => session.programEnrollment)
  sessions: ExerciseSession[];
}