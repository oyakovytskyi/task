import { Module } from '@nestjs/common';
import { AuthController, ItemController } from './auth.controller';
import { AuthService, ItemService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Item, User } from './user.entity';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Item]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'secretKey',
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [AuthController, ItemController],
  providers: [AuthService, ItemService, JwtStrategy],
})
export class AuthModule {}
