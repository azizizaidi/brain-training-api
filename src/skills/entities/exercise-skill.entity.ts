// src/skills/entities/exercise-skill.entity.ts

import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { Exercise } from '../../exercises/entities/exercise.entity';
import { CognitiveSkill } from './cognitive-skill.entity';

@Entity('exercise_skills')
export class ExerciseSkill {
  @PrimaryColumn({ name: 'exercise_id' })
  exerciseId: string;

  @PrimaryColumn({ name: 'skill_id' })
  skillId: string;

  @Column({ type: 'decimal', precision: 3, scale: 2, default: 1.0 })
  weight: number;

  // Relationships
  @ManyToOne(() => Exercise, (exercise) => exercise.exerciseSkills)
  @JoinColumn({ name: 'exercise_id' })
  exercise: Exercise;

  @ManyToOne(() => CognitiveSkill, (skill) => skill.exerciseSkills)
  @JoinColumn({ name: 'skill_id' })
  skill: CognitiveSkill;
}