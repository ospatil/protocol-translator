import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  @MessagePattern('GET.api.greet')
  async getData(data: string) {
    return `Hello ${data}`;
  }
}
