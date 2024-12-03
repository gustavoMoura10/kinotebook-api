import {
  Injectable,
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { Storage } from '@google-cloud/storage';
import { ConfigService } from '@nestjs/config';
import * as mime from 'mime-types';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class GoogleCloudStorageService {
  private storage: Storage;
  private imagesBucket: string;

  constructor(private readonly configService: ConfigService) {
    const credentials = JSON.parse(
      this.configService.get<string>('GCP_CREDENTIALS') || '{}',
    );

    // Inicializa o cliente do Google Cloud Storage
    this.storage = new Storage({ credentials });

    // Nome do bucket a partir do .env
    this.imagesBucket =
      this.configService.get<string>('GCP_BUCKET_IMAGE') || '';
  }

  async uploadFileImage(
    fileBuffer: Buffer,
    originalName: string,
    bucketName: string,
  ): Promise<string> {
    let url = '';
    try {
      const mimeType = mime.lookup(originalName);
      if (mimeType && !mimeType.startsWith('image/')) {
        throw new BadRequestException('Only image files are allowed');
      }
      const bucket = this.storage.bucket(`${this.imagesBucket}`);
      const fileName = `${bucketName}/${uuidv4()}-${originalName}`;
      const file = bucket.file(fileName);
      const writeStream = file.createWriteStream({
        metadata: {
          contentType: String(mimeType),
        },
      });
      await new Promise<void>((resolve, reject) => {
        writeStream.on('finish', resolve);
        writeStream.on('error', reject);
        writeStream.end(fileBuffer);
      });
      url = `https://storage.googleapis.com/${this.imagesBucket}/${fileName}`;
    } catch (error) {
      throw new InternalServerErrorException(
        `Error uploading file: ${error.message}`,
      );
    }
    return url;
  }
  async deleteFileImage(fileUrl: string): Promise<void> {
    try {
      if (
        !fileUrl.startsWith(
          `https://storage.googleapis.com/${this.imagesBucket}/`,
        )
      ) {
        throw new BadRequestException('Invalid file URL');
      }
      const filePath = fileUrl.replace(
        `https://storage.googleapis.com/${this.imagesBucket}/`,
        '',
      );
      const bucket = this.storage.bucket(this.imagesBucket);
      const file = bucket.file(filePath);
      await file.delete();
    } catch (error) {
      if (error.code === 404) {
        throw new BadRequestException('File not found in the bucket');
      }
      throw new InternalServerErrorException(
        `Error deleting file: ${error.message}`,
      );
    }
  }
}
