import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

import { ITokenPayload } from './authentication.interface';

export const JwtPayload = createParamDecorator((payloadKey: keyof ITokenPayload, context: ExecutionContext) => {
  const ctx = GqlExecutionContext.create(context);
  const jwtPayload = ctx.getContext().req.user;

  return payloadKey in jwtPayload ? jwtPayload[payloadKey] : jwtPayload;
});
