// src/config/typeorm.config.ts

import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModuleAsyncOptions, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity';
import { UserProfile } from '../users/entities/user-profile.entity';
import { UserStreak } from '../users/entities/user-streak.entity';
import { ExerciseCategory } from '../exercises/entities/exercise-category.entity';
import { Exercise } from '../exercises/entities/exercise.entity';
import { ExerciseSession } from '../exercises/entities/exercise-session.entity';
import { ExerciseFeedback } from '../exercises/entities/exercise-feedback.entity';
import { CognitiveSkill } from '../skills/entities/cognitive-skill.entity';
import { ExerciseSkill } from '../skills/entities/exercise-skill.entity';
import { UserSkill } from '../skills/entities/user-skill.entity';
import { TrainingProgram } from '../training/entities/training-program.entity';
import { ProgramExercise } from '../training/entities/program-exercise.entity';
import { UserProgram } from '../training/entities/user-program.entity';
import { Achievement } from '../achievements/entities/achievement.entity';
import { UserAchievement } from '../achievements/entities/user-achievement.entity';
import { Organization } from '../organizations/entities/organization.entity';
import { OrganizationMember } from '../organizations/entities/organization-member.entity';
import { AuthHistory } from '../auth/entities/auth-history.entity';

export const typeOrmAsyncConfig: TypeOrmModuleAsyncOptions = {
  imports: [ConfigModule],
  inject: [ConfigService],
  useFactory: async (configService: ConfigService): Promise<TypeOrmModuleOptions> => {
    return {
      type: 'postgres',
      host: configService.get('DB_HOST', 'localhost'),
      port: configService.get<number>('DB_PORT', 5432),
      username: configService.get('DB_USERNAME', 'postgres'),
      password: configService.get('DB_PASSWORD', 'password'),
      database: configService.get('DB_NAME', 'brain_training'),
      entities: [
        User,
        UserProfile,
        UserStreak,
        ExerciseCategory,
        Exercise,
        ExerciseSession,
        ExerciseFeedback,
        CognitiveSkill,
        ExerciseSkill,
        UserSkill,
        TrainingProgram,
        ProgramExercise,
        UserProgram,
        Achievement,
        UserAchievement,
        Organization,
        OrganizationMember,
        AuthHistory,
      ],
      synchronize: configService.get<boolean>('DB_SYNC', false),
      logging: configService.get<boolean>('DB_LOGGING', false),
      ssl: configService.get<boolean>('DB_SSL', false)
        ? {
            rejectUnauthorized: false,
          }
        : false,
    };
  },
};

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432', 10),
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_NAME || 'brain_training',
  entities: [
    User,
    UserProfile,
    UserStreak,
    ExerciseCategory,
    Exercise,
    ExerciseSession,
    ExerciseFeedback,
    CognitiveSkill,
    ExerciseSkill,
    UserSkill,
    TrainingProgram,
    ProgramExercise,
    UserProgram,
    Achievement,
    UserAchievement,
    Organization,
    OrganizationMember,
    AuthHistory,
  ],
  synchronize: process.env.DB_SYNC === 'true',
  logging: process.env.DB_LOGGING === 'true',
  ssl: process.env.DB_SSL === 'true'
    ? {
        rejectUnauthorized: false,
      }
    : false,
};