import { Module } from '@nestjs/common';
import { AuthController, ItemController } from './auth.controller';
import { AuthService, ItemService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item, User } from './user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Item])],
  controllers: [AuthController, ItemController],
  providers: [AuthService, ItemService],
})
export class AuthModule {}
