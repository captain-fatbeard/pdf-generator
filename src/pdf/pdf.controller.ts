import { Controller, Get, Query, Response, StreamableFile } from '@nestjs/common';
import { PDFService } from './pdf.service';

@Controller('/pdf')
export class PDFController {
	constructor(private pdfService: PDFService) {}

	@Get('/')
	async generate(@Response({ passthrough: true }) res, @Query() query: {url: string, filename: string}): Promise<StreamableFile> {
		const { url, filename } = query;
		const pdf = await this.pdfService.generate(url);
		res.set({
			'Content-Type': 'application/pdf',
			'Content-Disposition': `attachment; filename="${filename}.pdf"`,
		});
		return new StreamableFile(pdf);
	}
}
