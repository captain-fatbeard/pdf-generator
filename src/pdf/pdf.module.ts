import { Module } from '@nestjs/common';
import { PDFController } from './pdf.controller';
import { PDFService } from './pdf.service';

@Module({
  controllers: [PDFController],
  providers: [PDFService],
})
export class PDFModule {}
