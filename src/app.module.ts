import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonModule } from './person/person.module';
import { MongooseModule } from '@nestjs/mongoose';
import { LoggerMiddleware } from './Logger.Middleware';

@Module({
  imports: [
    PersonModule,
    MongooseModule.forRoot('mongodb://mongoadmin:12345678@localhost:27017')
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('person');
  }
}