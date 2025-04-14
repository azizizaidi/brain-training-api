// src/organizations/entities/organization-member.entity.ts

import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from 'typeorm';
import { Organization } from './organization.entity';
import { User } from '../../users/entities/user.entity';

@Entity('organization_members')
export class OrganizationMember {
  @PrimaryColumn({ name: 'organization_id' })
  organizationId: string;

  @PrimaryColumn({ name: 'user_id' })
  userId: string;

  @Column({ default: 'member' })
  role: string; // 'admin', 'manager', 'member'

  @CreateDateColumn({ name: 'created_at', type: 'timestamp with time zone' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp with time zone' })
  updatedAt: Date;

  // Relationships
  @ManyToOne(() => Organization, (organization) => organization.members)
  @JoinColumn({ name: 'organization_id' })
  organization: Organization;

  @ManyToOne(() => User, (user) => user.organizations)
  @JoinColumn({ name: 'user_id' })
  user: User;
}