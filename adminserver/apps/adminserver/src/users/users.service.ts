
import { DbService } from '@app/db';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'libs/db/entity/user.entity';
import { Repository } from 'typeorm';
import { BaseService } from '../BaseService';


@Injectable()
export class UsersService extends BaseService<User>  {

  constructor(
    @InjectRepository(User) private readonly userRep: Repository<User>
) {
    super(userRep);
}

}
