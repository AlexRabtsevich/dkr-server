import { HttpException, HttpStatus } from '@nestjs/common';

export class BadRequestException extends HttpException {
  constructor(path: string, message: string) {
    super(BadRequestException.getErrorWithPath(path, message), HttpStatus.BAD_REQUEST);
  }

  private static getErrorWithPath(path: string, message: string) {
    return {
      statusCode: HttpStatus.BAD_REQUEST,
      message: [
        {
          [path]: message,
        },
      ],
    };
  }
}
