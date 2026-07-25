import { Module } from '@nestjs/common';
import { HelloWorldController } from './hello-world.controller.js';

@Module({
  controllers: [HelloWorldController],
})
export class HelloWorldModule {}
