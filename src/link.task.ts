import { Injectable } from '@nestjs/common';
import { Cron, Interval, Timeout, NestSchedule} from 'nest-schedule'
import { QrCodeService } from './qr-code/qr-code.service';

@Injectable()
export class LinkTask extends NestSchedule {
    constructor(private readonly linkService: QrCodeService) {
        super();
    }

    @Interval(10000)
    generateNewLink() {
        const newLink = this.linkService.generateLink(8);
        return newLink;
    }
};
