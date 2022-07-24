export interface IGender {
  uuid: string;
  name: string;
}

export abstract class AbstractGenderService {
  public abstract findAll(): Promise<IGender[]>;

  public abstract findOneByUuid(genderUuid: string): Promise<IGender>;
}
