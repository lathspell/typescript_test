import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { LoggerModule } from 'nestjs-pino';
import { AllExceptionsFilter } from './all-exceptions.filter.js';
import { pinoHttpOptions } from './pino-http.options.js';

@Module({
  imports: [LoggerModule.forRoot({ pinoHttp: pinoHttpOptions })],
  providers: [{ provide: APP_FILTER, useClass: AllExceptionsFilter }],
})
export class LoggingModule {}
