import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, Relation } from 'typeorm';

import { WishListEntity } from './wish-list.entity';
import { IWishListMovie } from '../wish-list.interface';

@Entity({ name: 'wish_list_movie' })
export class WishListMovieEntity implements IWishListMovie {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column({ type: 'integer', name: 'external_id', unique: true })
  externalId: number;

  @CreateDateColumn()
  createdAt: Date;

  @Column({ type: 'boolean', name: 'is_watched', default: false })
  isWatched: boolean;

  @Column({ nullable: true })
  wishListUuid: string;

  @ManyToOne(() => WishListEntity, (watchlist) => watchlist.movies)
  wishList: Relation<WishListEntity>;
}
