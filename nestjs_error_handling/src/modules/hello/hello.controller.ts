import { Controller, Get } from '@nestjs/common';
import { PinoLogger } from 'nestjs-pino';

@Controller('/hello')
export class HelloController {
  constructor(private readonly logger: PinoLogger) {
    this.logger.setContext(HelloController.name);
  }

  @Get()
  getHello(): string {
    this.logger.info('Printing hello...');
    return 'Hello World';
  }
}
