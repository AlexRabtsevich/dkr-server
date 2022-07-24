import { BaseEntity, Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, Relation } from 'typeorm';

import { UserEntity } from '@dkr/modules/user';

@Entity({ name: 'refresh_token' })
export class RefreshTokenEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column({ type: 'integer' })
  expires: number;

  @Column({ nullable: true })
  userUuid: string;

  @OneToOne(() => UserEntity)
  @JoinColumn()
  user: Relation<UserEntity>;
}
