import { GetUser } from './../get-user.decorator';
import { Body, Controller, Get, Post, Redirect, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private srvUser: AuthService) { }

    @Post('/signin')
    signup(@Body() data): Promise<{ accessToken: string }> {
        return this.srvUser.signup(data)
    }

    @Post('/test')
    // @Redirect('https://google.com', 302)
    @UseGuards(AuthGuard())
    test(@GetUser() user) {
        return user
    }
}
