// src/exercises/entities/exercise.entity.ts

import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { ExerciseCategory } from './exercise-category.entity';
import { CognitiveSkill } from '../../skills/entities/cognitive-skill.entity';
import { ExerciseSession } from './exercise-session.entity';
import { ExerciseSkill } from '../../skills/entities/exercise-skill.entity';
import { ProgramExercise } from '../../training/entities/program-exercise.entity';
import { ExerciseFeedback } from './exercise-feedback.entity';

@Entity('exercises')
export class Exercise {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'category_id' })
  categoryId: string;

  @Column()
  name: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ type: 'text', nullable: true })
  instructions: string;

  @Column({ name: 'difficulty_base', default: 1 })
  difficultyBase: number;

  @Column({ name: 'time_limit', nullable: true })
  timeLimit: number;

  @Column({ type: 'jsonb' })
  content: Record<string, any>;

  @Column({ name: 'scoring_strategy', default: 'standard' })
  scoringStrategy: string;

  @Column({ name: 'is_premium', default: false })
  isPremium: boolean;

  @Column({ name: 'is_active', default: true })
  isActive: boolean;

  @Column({ nullable: true })
  thumbnail: string;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp with time zone' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp with time zone' })
  updatedAt: Date;

  // Relationships
  @ManyToOne(() => ExerciseCategory, (category) => category.exercises)
  @JoinColumn({ name: 'category_id' })
  category: ExerciseCategory;

  @OneToMany(() => ExerciseSkill, (exerciseSkill) => exerciseSkill.exercise)
  exerciseSkills: ExerciseSkill[];

  @OneToMany(() => ExerciseSession, (session) => session.exercise)
  sessions: ExerciseSession[];

  @OneToMany(() => ProgramExercise, (programExercise) => programExercise.exercise)
  programExercises: ProgramExercise[];

  @OneToMany(() => ExerciseFeedback, (feedback) => feedback.exercise)
  feedback: ExerciseFeedback[];
}