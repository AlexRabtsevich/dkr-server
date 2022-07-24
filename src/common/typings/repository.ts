export interface IRepositoryRead<T> {
  findAll: () => Promise<T[]>;
  findOne: (id: string | number) => Promise<T>;
}

export interface IRepositoryWrite<T> {
  create: (item: T) => Promise<T>;
  update: (id: string | number, item: T) => Promise<T>;
  delete: (id: string | number) => Promise<boolean>;
}
