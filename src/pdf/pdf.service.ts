import { Injectable } from '@nestjs/common';
import { chromium } from 'playwright';

@Injectable({})
export class PDFService {
	async generate(url: string) {
		const browser = await chromium.launch();
		const context = await browser.newContext();
		const page = await context.newPage();
		const navigationPromise = page.waitForNavigation();

		await page.goto(url);
		navigationPromise;
		const pdf = await page.pdf({
			// path: 'document.pdf', // save to disk
			displayHeaderFooter: true,
			margin: {
				top: '20px',
				bottom: '20px',
			},
			printBackground: true,
		});
		await browser.close();

		return pdf;
	}
}
