import { ApiProperty, PartialType } from '@nestjs/swagger';
import { Column } from 'typeorm';
import { CreateUserDto } from './create-user.dto';


export class UpdateUserDto extends PartialType(CreateUserDto) {

    @ApiProperty({
        description: '密码',
        type: String
    })
    @Column()
    password: string

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
