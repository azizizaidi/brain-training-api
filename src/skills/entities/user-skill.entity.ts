// src/skills/entities/user-skill.entity.ts

import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { CognitiveSkill } from './cognitive-skill.entity';

@Entity('user_skills')
export class UserSkill {
  @PrimaryColumn({ name: 'user_id' })
  userId: string;

  @PrimaryColumn({ name: 'skill_id' })
  skillId: string;

  @Column({ name: 'proficiency_level', type: 'decimal', precision: 5, scale: 2, default: 0 })
  proficiencyLevel: number;

  @Column({ name: 'last_assessed', type: 'timestamp with time zone' })
  lastAssessed: Date;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp with time zone' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp with time zone' })
  updatedAt: Date;

  // Relationships
  @ManyToOne(() => User, (user) => user.skills)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => CognitiveSkill, (skill) => skill.userSkills)
  @JoinColumn({ name: 'skill_id' })
  skill: CognitiveSkill;
}