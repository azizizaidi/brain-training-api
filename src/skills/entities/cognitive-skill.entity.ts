// src/skills/entities/cognitive-skill.entity.ts

import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { ExerciseSkill } from './exercise-skill.entity';
import { UserSkill } from './user-skill.entity';

@Entity('cognitive_skills')
export class CognitiveSkill {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ name: 'brain_type' })
  brainType: string; // 'left', 'right', 'both'

  @CreateDateColumn({ name: 'created_at', type: 'timestamp with time zone' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp with time zone' })
  updatedAt: Date;

  // Relationships
  @OneToMany(() => ExerciseSkill, (exerciseSkill) => exerciseSkill.skill)
  exerciseSkills: ExerciseSkill[];

  @OneToMany(() => UserSkill, (userSkill) => userSkill.skill)
  userSkills: UserSkill[];
}