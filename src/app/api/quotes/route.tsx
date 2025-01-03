import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse';

interface Word {
  Word: string;
  Name: string;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const number = parseInt(searchParams.get('number') || '10', 10);

  const filePath = path.join(process.cwd(), 'public/docs', 'motivation.csv');

  try {
    const data = fs.readFileSync(filePath, 'utf8');
    const parseCSV = () => new Promise<Word[]>((resolve, reject) => {
      parse(
        data,
        {
          columns: ['Motivation', 'Author'], // Explicitly map the first column
          relax_quotes: true,      // Allow lenient handling of quotes
          skip_empty_lines: true,  // Skip blank lines
        },
        (err, records: any[]) => {
          if (err) {
            return reject(err);
          }

          const words: Word[] = records.map((row) => ({
            Word: row.Motivation.trim(),
            Name: row.Author.trim(),
          }));
          resolve(words);
        }
      );
    });

    let words = await parseCSV();

    // Randomly shuffle and select `number` entries
    words = words.sort(() => 0.5 - Math.random()).slice(0, number);

    return NextResponse.json(words);
  } catch (err) {
    console.error('Error:', err);
    return NextResponse.json({ error: 'Failed to process CSV file' }, { status: 500 });
  }
}
