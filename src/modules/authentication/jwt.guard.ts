import { AuthGuard } from '@nestjs/passport';
import { ExecutionContext, Injectable } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

import { JWT_AUTHENTICATION } from './jwt.constants';

@Injectable()
export class JwtGuard extends AuthGuard(JWT_AUTHENTICATION) {
  getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);

    return ctx.getContext().req;
  }
}
