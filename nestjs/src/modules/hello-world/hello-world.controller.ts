import { Controller, Get } from '@nestjs/common';

@Controller()
export class HelloWorldController {
  @Get('hello')
  getHello(): string {
    return 'Hello World';
  }
}
