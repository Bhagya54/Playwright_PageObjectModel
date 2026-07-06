import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse/sync';

export function readCSVData(filePath: string): any[] {
    const absolutePath = path.resolve(__dirname, "..", filePath);
    const fileContent = fs.readFileSync(absolutePath, 'utf8');
    const records = parse(fileContent, {
        columns: true,
        skip_empty_lines: true,
        trim: true
    });
    return records;
}
