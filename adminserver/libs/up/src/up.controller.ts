import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('upload')
export class UpController {

    @Post('')
    @UseInterceptors(FileInterceptor('file',{ dest: 'uploads' }))
    uploadFile(@UploadedFile() file: Express.Multer.File) {
        return 'http://localhost:3000/uploads/'+file.filename
    }

}
