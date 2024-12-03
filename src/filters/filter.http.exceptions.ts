import {
  ArgumentsHost,
  Catch,
  ConsoleLogger,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { HttpAdapterHost } from '@nestjs/core';

@Catch()
export class FilterHttpException implements ExceptionFilter {
  constructor(private httpAdapterHost: HttpAdapterHost,
    private logger: ConsoleLogger
  ) {}
  catch(exception: unknown, host: ArgumentsHost) {
    this.logger.error(exception);
    console.error(exception);
    const context = host.switchToHttp();
    const response = context.getResponse();
    const request = context.getRequest();
    const httpAdapter = this.httpAdapterHost.httpAdapter;
    if(request['headers']['user']) {
      this.logger.error(`Unauthorized: ${request['headers']['user']}`);
    }
    const { status, body } =
      exception instanceof HttpException
        ? {
            status: exception.getStatus(),
            body: {
              ...(exception.getResponse() as object),
              statusCode: exception.getStatus(),
              timestamp: new Date().toISOString(),
              path: httpAdapter.getRequestUrl(request),
            },
          }
        : {
            status: HttpStatus.INTERNAL_SERVER_ERROR,
            body: {
              statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
              timestamp: new Date().toISOString(),
              message: 'Internal Server Error',
              path: httpAdapter.getRequestUrl(request),
            },
          };
    httpAdapter.reply(response, body, status);
  }
}
