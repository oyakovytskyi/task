import { Controller, Post, Body, Res, Get } from '@nestjs/common';
import { AuthService, ItemService } from './auth.service';
import { Response } from 'express';
import { Item } from './user.entity';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(
    @Body('email') email: string,
    @Body('password') password: string,
    @Res() res: Response,
  ) {
    try {
      const user = await this.authService.login(email, password);
      return res.status(200).json(user);
    } catch (error) {
      return res.status(401).json({ message: error.message });
    }
  }

  @Post('signup')
  async signup(
    @Body('email') email: string,
    @Body('password') password: string,
    @Res() res: Response,
  ) {
    try {
      const newUser = await this.authService.signup(email, password);
      return res.status(201).json(newUser);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  }
}

@Controller('items')
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  @Get()
  async getAllItems(): Promise<Item[]> {
    return this.itemService.getAllItems();
  }
}
