import { Controller, Get } from '@nestjs/common';
import { AppService } from '@services/app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

@Controller('health')
export class HealthController {
  @Get()
  checkHealth() {
    return { status: 'ok' };
  }
}
