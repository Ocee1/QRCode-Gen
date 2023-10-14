import { Controller, Get, Query, Res, Param } from "@nestjs/common";
import { QrCodeService } from "./qr-code.service";
import { Response } from "express";

@Controller('qrcode')
export class QrCodeController {
    constructor(private readonly qrService: QrCodeService) {}

    @Get()
    async test() {
        return 'I am up and running on nest!!'
    };

    @Get('link')
    async getRoot(@Res() response: Response) {
        // response.setHeader('Content-Type', 'image/png');
        response.setHeader('Refresh', '10');
        const link = this.qrService.generateLink(8);
        const qrDataUrl = await this.qrService.generateCode(link);
        response.send(`<img src="${qrDataUrl}" alt="QR Code for Movie list" />`); 
    };

    @Get(':redirectPath')
    redirectToUrl(@Param('redirectPath') urlPath: string, @Res() res: Response) {
        // Define the target URL where you want to redirect
        const targetUrl = `https://example.com/${urlPath}`;

        // Use the response object to set the redirect headers
        res.redirect(302, targetUrl);
    };

    @Get('movies')
    getRandomMovies(): any[] {
        return this.qrService.getRandomMovies();
    };
};