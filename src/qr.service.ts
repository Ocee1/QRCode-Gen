import { Injectable } from '@nestjs/common';
import { QRCodeToData } from 'qrcode';
import * as QRCode from 'qrcode';

@Injectable()
export class QrCodeService {
    async generateCode(url:string): Promise<QRCodeToData> {
        try {
            const QrDataUrl = await QRCode.todataurl(url);
            return QrDataUrl;
        } catch (error) {
            throw new Error('Failed to generate qrcode');
        }
    }
}
