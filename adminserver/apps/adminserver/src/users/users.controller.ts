import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiTags } from '@nestjs/swagger';
const bcrypt = require('bcryptjs');

@Controller('users')
@ApiTags('Users')
export class UsersController {
  //通过构造函数注入service
  constructor(
    private readonly usersService: UsersService
  ) { }

  /**
   * 添加用户
   * @param createUserDto User
   * @returns 
   */
  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    if(createUserDto){
      createUserDto.password = bcrypt.hashSync(createUserDto.password,10)
    }
    return this.usersService.create(createUserDto);
  }

  /**
   * 获取全部用户
   * @returns 全部用户
   */
  @Get()
  async findAll() {
    return this.usersService.findAll();
  }

  /**
   * 查找单个用户
   * @param id  用户名
   * @returns 单个用户 
   */
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.usersService.findOne({ studentID:id });
  }

  /**
   * 修改单个用户
   * @param id 用户名
   * @param updateUserDto User
   * @returns 修改信息
   */
  @Put(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    let modelUpdate = await this.usersService.findOne({studentID:id});
    modelUpdate = {...modelUpdate,...updateUserDto};
    return modelUpdate
    // return this.usersService.update({studentID:id},updateUserDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    let photoToRemove = await this.usersService.findOne({id});
    return this.usersService.removeOne(photoToRemove);
  }
}
