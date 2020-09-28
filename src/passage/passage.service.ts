import { WebPassages } from './../../entities/WebPassages';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PassageService {
    constructor(@InjectRepository(WebPassages) private repoWeb: Repository<WebPassages>,) { }
    async getPassages(req) {
        let res = await this.repoWeb.findAndCount({ visuPassage: 'o' })
        if (!res) {
            throw new NotFoundException
        }

        return { res }
    }
}
