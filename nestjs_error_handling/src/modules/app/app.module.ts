import { Module } from '@nestjs/common';
import { LoggingModule } from '../infra/logging/logging.module.js';
import { HelloModule } from '../hello/hello.module.js';
import { ErrorModule } from '../error/error.module.js';

@Module({
  imports: [LoggingModule, HelloModule, ErrorModule],
})
export class AppModule {}
