import { Controller, Get } from '@nestjs/common';
import { PDFService } from './pdf.service';

@Controller('/pdf')
export class PDFController {
  constructor(private pdfService: PDFService) {}

  @Get('/generate')
  generate() {
    return 'PDF is generated';
  }
}
