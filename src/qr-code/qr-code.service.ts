import { Injectable } from '@nestjs/common';
import { QRCodeToData } from 'qrcode';
import * as QRCode from 'qrcode';
import { movies } from 'src/data';

@Injectable()
export class QrCodeService {
    generateLink(length: number): string {

        const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890bcdefghijklmnopqrstuvwxyz";

        const ranArray = Array.from({length}, (v, k) => chars[~~(Math.random() * chars.length)]);

        const randomStr = ranArray.join('');

        return `http://BASE_URL/${randomStr}`;
    }
    async generateCode(url:string): Promise<QRCodeToData> {
        try {
            const QrDataUrl = await QRCode.toDataURL(url);
            return QrDataUrl;
        } catch (error) {
            console.log(error);
            // throw new Error('Failed to generate qrcode');
        }
    }

    private movieData = movies;

    // movie shuffle algorithm
    private shuffleArray(array: any[]): void {
        for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
        }
    }

    getRandomMovies(): any[] {
        // Clone the array to avoid modifying the original array
        const shuffledMovies = [...this.movieData];
        this.shuffleArray(shuffledMovies);
        return shuffledMovies.slice(0, 10);
    }
}
