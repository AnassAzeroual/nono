import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private srvUser: AuthService) { }

    @Post('/signup')
    signup(@Body() data) {
        return this.srvUser.signup(data)
    }
}
