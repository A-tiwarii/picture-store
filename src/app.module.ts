import { Module } from '@nestjs/common';
import { pictureModule } from './picture/picture.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://aman123:QwF0qvgTbar3SNF5@cluster0.2cswa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'),
    pictureModule
  ]
})
export class AppModule {}
