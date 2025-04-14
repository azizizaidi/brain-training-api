// src/organizations/entities/organization.entity.ts

import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { OrganizationMember } from './organization-member.entity';

@Entity('organizations')
export class Organization {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({ name: 'subscription_plan', default: 'basic' })
  subscriptionPlan: string;

  @Column({ name: 'subscription_status', default: 'active' })
  subscriptionStatus: string;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp with time zone' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at', type: 'timestamp with time zone' })
  updatedAt: Date;

  // Relationships
  @OneToMany(() => OrganizationMember, (member) => member.organization)
  members: OrganizationMember[];
}