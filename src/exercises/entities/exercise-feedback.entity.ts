// src/exercises/entities/exercise-feedback.entity.ts

import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Exercise } from './exercise.entity';

@Entity('exercise_feedback')
export class ExerciseFeedback {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'user_id' })
  userId: string;

  @Column({ name: 'exercise_id' })
  exerciseId: string;

  @Column({ nullable: true, type: 'integer', check: 'rating BETWEEN 1 AND 5' })
  rating: number;

  @Column({ type: 'text', nullable: true })
  feedback: string;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp with time zone' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp with time zone' })
  updatedAt: Date;

  // Relationships
  @ManyToOne(() => User, (user) => user.feedback)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Exercise, (exercise) => exercise.feedback)
  @JoinColumn({ name: 'exercise_id' })
  exercise: Exercise;
}