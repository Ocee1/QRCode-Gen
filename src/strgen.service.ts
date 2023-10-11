import * as crypto from 'crypto';

export const randomStr = (length: number): string => {
    return crypto
        .randomBytes(length)
        .toString('hex')
        .slice(0, length);
};