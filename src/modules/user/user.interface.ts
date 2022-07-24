import { IGender } from '@dkr/modules/gender';

export interface IUser {
  uuid: string;
  firstName: string;
  lastName: string;
  birthDate: Date;
  email: string;
  gender: IGender;
  status: UserStatus;
}

export interface ICreateUser extends Omit<IUser, 'gender' | 'status' | 'uuid'> {
  password: string;
  genderUuid: string;
}

export type UpdateUser = Partial<Omit<ICreateUser, 'password' | 'email'>>;

export enum UserStatus {
  Active = 'ACTIVE',
  Blocked = 'BLOCKED',
}

export abstract class AbstractUserService {
  public abstract create(user: ICreateUser): Promise<boolean>;
  public abstract update(userUuid: string, user: UpdateUser): Promise<IUser>;
  public abstract findByUuid(uuid: string): Promise<IUser>;
}
