import { Controller, Get, Inject, Req } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Request } from 'express';
import { timeout } from 'rxjs/operators';

@Controller()
export class AppController {
  constructor(@Inject('NATS_CLIENT') private client: ClientProxy) {}

  @Get('*')
  getData(@Req() req: Request) {
    // construct NATS subject name to publish to
    const subject = `${req.method}${req.path.replace(/\//g, '.')}`;

    return this.client
      .send<string, string>(subject, 'world!')
      .pipe(timeout(2000));
  }
}
