export interface ITokenPayload {
  iat: number;
  exp: number;
  userUuid: string;
}

export type AccessTokenPayload = ITokenPayload;
export type RefreshTokenPayload = ITokenPayload;

export interface IAuthentication {
  accessToken: string;
  refreshToken: string;
}

export abstract class AbstractAuthenticationService {
  public abstract authenticate(userEmail: string, password: string): Promise<IAuthentication>;
  public abstract refreshAuthentication(refreshToken: string): Promise<IAuthentication>;
  public abstract deleteAuthentication(userUuid: string): Promise<boolean>;
}
