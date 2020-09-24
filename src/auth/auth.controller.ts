import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { GetUser } from './get-user.decorator';

@Controller('auth')
export class AuthController {
    constructor(private srvUser: AuthService) { }

    @Post('/signin')
    signup(@Body() data): Promise<{ accessToken: string }> {
        return this.srvUser.signup(data)
    }

    @Post('/test')
    @UseGuards(AuthGuard())
    test(@GetUser() user) {
        return user
    }
}
