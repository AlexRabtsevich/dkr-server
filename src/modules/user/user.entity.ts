import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Relation,
  UpdateDateColumn,
  JoinColumn,
  ManyToOne,
  BeforeInsert,
} from 'typeorm';
import { Exclude } from 'class-transformer';

import { GenderEntity } from '@dkr/modules/gender';
import { hashValue } from '@dkr/shared/crypt';

import { UserStatus } from './user.interface';
import { MAX_USER_NAME_LENGTH } from './user.constants';

@Entity({ name: 'user' })
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column({ type: 'varchar', length: MAX_USER_NAME_LENGTH, name: 'first_name' })
  firstName: string;

  @Column({ type: 'varchar', length: MAX_USER_NAME_LENGTH, name: 'last_name' })
  lastName: string;

  @Column({ type: 'date', name: 'birth_date' })
  birthDate: Date;

  @Column({ unique: true, type: 'varchar' })
  email: string;

  @Column({ type: 'varchar' })
  @Exclude()
  password: string;

  @ManyToOne(() => GenderEntity)
  @JoinColumn()
  gender: Relation<GenderEntity>;

  @Column({ type: 'enum', enum: UserStatus, default: UserStatus.Active })
  status: UserStatus;

  @CreateDateColumn({ type: 'date', name: 'created_at' })
  @Exclude()
  createdAt: Date;

  @UpdateDateColumn({ type: 'date', name: 'updated_at' })
  @Exclude()
  updatedAt: Date;

  @BeforeInsert()
  private async hasPassword() {
    this.password = await hashValue(this.password);
  }
}
