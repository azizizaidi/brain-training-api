// src/users/entities/user.entity.ts

import { Column, CreateDateColumn, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { UserProfile } from './user-profile.entity';
import { ExerciseSession } from '../../exercises/entities/exercise-session.entity';
import { UserProgram } from '../../training/entities/user-program.entity';
import { UserSkill } from '../../skills/entities/user-skill.entity';
import { UserStreak } from './user-streak.entity';
import { UserAchievement } from '../../achievements/entities/user-achievement.entity';
import { ExerciseFeedback } from '../../exercises/entities/exercise-feedback.entity';
import { OrganizationMember } from '../../organizations/entities/organization-member.entity';
import { AuthHistory } from '../../auth/entities/auth-history.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ name: 'first_name', nullable: true })
  firstName: string;

  @Column({ name: 'last_name', nullable: true })
  lastName: string;

  @Column({ default: 'user' })
  role: string;

  @Column({ name: 'profile_image', nullable: true })
  profileImage: string;

  @Column({ name: 'is_active', default: true })
  isActive: boolean;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp with time zone' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp with time zone' })
  updatedAt: Date;

  // Relationships
  @OneToOne(() => UserProfile, (profile) => profile.user)
  profile: UserProfile;

  @OneToMany(() => ExerciseSession, (session) => session.user)
  exerciseSessions: ExerciseSession[];

  @OneToMany(() => UserProgram, (userProgram) => userProgram.user)
  programEnrollments: UserProgram[];

  @OneToMany(() => UserSkill, (userSkill) => userSkill.user)
  skills: UserSkill[];

  @OneToOne(() => UserStreak, (streak) => streak.user)
  streak: UserStreak;

  @OneToMany(() => UserAchievement, (achievement) => achievement.user)
  achievements: UserAchievement[];

  @OneToMany(() => ExerciseFeedback, (feedback) => feedback.user)
  feedback: ExerciseFeedback[];

  @OneToMany(() => OrganizationMember, (member) => member.user)
  organizations: OrganizationMember[];

  @OneToMany(() => AuthHistory, (authHistory) => authHistory.user)
  authHistory: AuthHistory[];
}