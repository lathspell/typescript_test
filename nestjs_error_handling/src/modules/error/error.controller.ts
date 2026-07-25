import { Controller, Get } from '@nestjs/common';

@Controller('/error')
export class ErrorController {
  @Get()
  getError(): void {
    new Foo().foo();
  }
}

class Foo {
  foo() {
    new Bar().bar();
  }
}

class Bar {
  bar() {
    throw new Error('Something went wrong!');
  }
}
