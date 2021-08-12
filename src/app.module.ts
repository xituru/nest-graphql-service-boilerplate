import { Module } from '@nestjs/common';
import { GraphQLGatewayModule } from '@nestjs/graphql';
import AppController from './app.controller';
import AppService from './app.service';

@Module({
  imports: [
    GraphQLGatewayModule.forRoot({
      server: {
        cors: true,
      },
      gateway: {
        serviceList: [],
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export default class AppModule {}
