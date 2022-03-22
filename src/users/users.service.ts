import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './interfaces/user.interface';

import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';

import { map } from 'rxjs/operators';

@Injectable()
export class UsersService {
  constructor(private httpService: HttpService) {}

  async findAll(): Promise<Observable<AxiosResponse<User[], any>>> {
    return this.httpService
      .get('https://jsonplaceholder.typicode.com/users')
      .pipe(map((response) => response.data));
  }

  findOne(id: number) {
    return this.httpService
      .get('https://jsonplaceholder.typicode.com/users')
      .pipe(map((response) => response.data))
      .pipe(map((data) => data.find((user) => user.id == id)));
  }

  filterUsers(updateUserDto: UpdateUserDto) {
    return this.httpService
      .get('https://jsonplaceholder.typicode.com/users')
      .pipe(map((response) => response.data))
      .pipe(
        map((data) =>
          data.filter((user) => user.name.includes(updateUserDto.name)),
        ),
      );
  }
}
