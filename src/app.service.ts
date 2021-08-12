import { Injectable } from '@nestjs/common';

@Injectable()
export default class AppService {
  #message = 'Hello World!';

  getHello(): string {
    return this.#message;
  }
}
