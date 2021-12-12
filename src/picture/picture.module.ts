import { Module } from '@nestjs/common';
import { pictureController } from './picture.controller';
import { pictureService } from './picture.service';
import { MongooseModule } from '@nestjs/mongoose';
import { pictureSchema } from './schema/picture.schema';

@Module({
  imports : [
    MongooseModule.forFeature([
      {
        name: 'picture',
        schema : pictureSchema
      }
    ])
  ],
  controllers: [pictureController],
  providers: [pictureService]
})
export class pictureModule {}
