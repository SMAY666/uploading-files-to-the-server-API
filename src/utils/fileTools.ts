import multer from 'fastify-multer';
import path from 'path';
import * as uuid from 'uuid';
import fs from 'fs';


const PUBLIC_DIR = path.join(process.mainModule!.path, '..', 'public');
const FILES_DIR = path.join(PUBLIC_DIR, 'files');

function createFileStorage(dir: string): ReturnType<typeof multer.diskStorage> {
    try {
        fs.mkdirSync(dir, {recursive: true});
    } catch(error) {
        console.log(error);
        process.exit(-2);
    }

    return multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, dir);
        },
        filename: (req, file, cb) => {
            cb(null, uuid.v4() + path.extname(file.originalname));
        },
    });
}

export const filesUpload = multer({
    storage: createFileStorage(FILES_DIR),
    limits: {
        fileSize: 52428800, // 50Мб
    },
});

