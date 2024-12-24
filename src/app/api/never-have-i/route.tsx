import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse';

interface Word {
  Sentence: string;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const number = parseInt(searchParams.get('number') || '10', 10);

  const filePath = path.join(process.cwd(), 'public/docs', 'never-have-i-ever.csv');

  try {
    // Read the CSV file content
    const data = fs.readFileSync(filePath, 'utf8');

    // Parse the CSV file
    const parseCSV = () =>
      new Promise<Word[]>((resolve, reject) => {
        parse(data, { columns: true }, (err, records: any[]) => {
          if (err) {
            return reject(err);
          }

          const words: Word[] = records.map((row) => ({
            Sentence: row['Never'],
          }));

          resolve(words);
        });
      });

    let words = await parseCSV();

    // Randomize and slice the words based on the requested number
    words = words.sort(() => 0.5 - Math.random()).slice(0, number);

    return NextResponse.json(words);
  } catch (err:any) {
    console.error('Error processing the CSV file:', err.message);
    return NextResponse.json(
      { error: `Failed to process CSV file: ${err.message}` },
      { status: 500 }
    );
  }
}
