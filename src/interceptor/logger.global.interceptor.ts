import {
  CallHandler,
  ConsoleLogger,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Request } from 'express';
import { Observable, tap } from 'rxjs';
import { CustomRequestInterface } from '../interfaces/custom.request.interface';

@Injectable()
export class LoggerGlobalInterceptor implements NestInterceptor {
  constructor(private logger: ConsoleLogger) {}
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const contextHttp = context.switchToHttp();
    const request = contextHttp.getRequest();
    const user = request.user;
    const response = contextHttp.getResponse();
    const { path, method } = request;
    const { statusCode } = response;
    const instant = Date.now();
    return next.handle().pipe(
      tap(() => {
        if (user in request) {
          this.logger.log(`Route accessed by: ${user?.sub}`);
        }
        const timeExecution = Date.now() - instant;
        this.logger.log(
          `${method.toUpperCase()} ${path} ${statusCode} ${timeExecution}ms`,
        );
      }),
    );
  }
}
