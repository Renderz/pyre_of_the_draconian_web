import { Controller, Get, Module } from '@nestjs/common';

@Controller('test')
class TestController {
  @Get()
  getHello(): string {
    return 'Hello World!';
  }
}

@Module({
  imports: [],
  controllers: [TestController],
  providers: [],
})
export class AppModule {}
