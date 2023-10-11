import { Controller, Get, Query } from "@nestjs/common";
import { QrCodeService } from "./qr.service";

@Controller('qr-code')
export class QrCodeController {
    constructor(private readonly qrService: QrCodeService) {}

    @Get()
    async generateQrCode(@Query('data') data: string) {
        const qrDataUrl = await this.qrService.generateCode(data);
        return `<img src="${qrDataUrl}> alt="QR Code for Movie list" />`;
    }
}