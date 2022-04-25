import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity("user")
export class User {


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

  @ApiProperty({
    description: '关注数',
    type: Number
  })
  @Column({default:0})
  followcount: Number

  @ApiProperty({
    description: '粉丝数',
    type: Number
  })
  @Column({default:0})
  fanscount: Number

  @ApiProperty({
    description: '文章数',
    type: Number
  })
  @Column({default:0})
  posts: Number

  @ApiProperty({
    description: '评论数',
    type: Number
  })
  @Column({default:0})
  comments: Number

  @ApiProperty({
    description: '点赞数',
    type: Number
  })
  @Column({default:0})
  likes: Number

  @CreateDateColumn()
  createDate: Date;
  
  @UpdateDateColumn()
  updateDate: Date;
}
