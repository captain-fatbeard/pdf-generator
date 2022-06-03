import { Module } from '@nestjs/common';
import { PDFModule } from './pdf/pdf.module';

@Module({
	imports: [PDFModule],
})
export class AppModule {}
