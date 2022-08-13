import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  Relation,
  UpdateDateColumn,
} from 'typeorm';

import { UserEntity } from '@dkr/modules/user';

import { WishListMovieEntity } from './wish-list-movie.entity';

@Entity({ name: 'wish_list' })
export class WishListEntity {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column({ nullable: true, name: 'user_uuid' })
  userUuid: string;

  @ManyToOne(() => UserEntity)
  @JoinColumn()
  user: Relation<UserEntity>;

  @Column({ type: 'varchar' })
  title: string;

  @CreateDateColumn({ type: 'date', name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'date', name: 'updated_at' })
  updatedAt: Date;

  @OneToMany(() => WishListMovieEntity, (watchlistMovie) => watchlistMovie.wishList)
  @JoinColumn()
  movies: Relation<WishListMovieEntity>[];
}
