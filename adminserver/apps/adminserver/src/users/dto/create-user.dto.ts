import { ApiProperty } from "@nestjs/swagger";
import { Column, PrimaryGeneratedColumn } from "typeorm";

export class CreateUserDto {
    @PrimaryGeneratedColumn("uuid")
    id: string;
  
    @ApiProperty({
      description: '学号',
      type: String
    })
    @Column({
      length: 16,
      unique:true,
    })
    studentID: string
  
    @ApiProperty({
      description: '密码',
      type: String
    })
    @Column({})
    password: string
  
  
    @ApiProperty({
      description: '年纪',
      type: String
    })
    @Column({
      length: 10
    })
    grade: string
  
    @ApiProperty({
      description: '性别',
      type: String
    })
    @Column({
      length: 3
    })
    gender: string
  
    @ApiProperty({
      description: '个性签名',
      type: String
    })
    @Column()
    signature: string
  
    @ApiProperty({
      description: '昵称',
      type: String
    })
    @Column({
      length: 16
    })
    nickname: string
  
    @ApiProperty({
      description: '个人背景',
      type: String
    })
    @Column()
    banner: string
  
    @ApiProperty({
      description: '手机号',
      type: String
    })
    @Column()
    phone: string
  
    @ApiProperty({
      description: '头像',
      type: String
    })
    @Column()
    avator: string
}
