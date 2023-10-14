import { Module } from "@nestjs/common";
import { QrCodeController } from "src/qr-code/qr-code.controller";
import { QrCodeService } from "src/qr-code/qr-code.service";


@Module({
    controllers: [QrCodeController],
    providers: [QrCodeService],
})

export class QrCodeModule {}