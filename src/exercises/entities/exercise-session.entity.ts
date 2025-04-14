// src/exercises/entities/exercise-session.entity.ts

import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Exercise } from './exercise.entity';
import { UserProgram } from '../../training/entities/user-program.entity';

@Entity('exercise_sessions')
export class ExerciseSession {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'user_id' })
  userId: string;

  @Column({ name: 'exercise_id' })
  exerciseId: string;

  @Column({ name: 'program_enrollment_id', nullable: true })
  programEnrollmentId: string;

  @Column({ name: 'start_time', type: 'timestamp with time zone' })
  startTime: Date;

  @Column({ name: 'end_time', type: 'timestamp with time zone', nullable: true })
  endTime: Date;

  @Column({ name: 'difficulty_level' })
  difficultyLevel: number;

  @Column({ nullable: true })
  score: number;

  @Column({ type: 'decimal', precision: 5, scale: 2, nullable: true })
  accuracy: number;

  @Column({ name: 'completion_status', default: 'started' })
  completionStatus: string; // 'started', 'completed', 'abandoned'

  @Column({ name: 'performance_data', type: 'jsonb', nullable: true })
  performanceData: Record<string, any>;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp with time zone' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp with time zone' })
  updatedAt: Date;

  // Relationships
  @ManyToOne(() => User, (user) => user.exerciseSessions)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Exercise, (exercise) => exercise.sessions)
  @JoinColumn({ name: 'exercise_id' })
  exercise: Exercise;

  @ManyToOne(() => UserProgram, (userProgram) => userProgram.sessions)
  @JoinColumn({ name: 'program_enrollment_id' })
  programEnrollment: UserProgram;
}