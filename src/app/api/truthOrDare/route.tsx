import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse';

interface Questions {
  question: string;
  choice: string;
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const choice = searchParams.get('choice');
  const fetchChoice = searchParams.get('fetchChoice') === 'true';

  const filePath = path.join(process.cwd(), 'public/docs', 'truth-or-dare.csv');

  try {
    const data = fs.readFileSync(filePath, 'utf8');

    const parseCSV = () => new Promise<Questions[]>((resolve, reject) => {
      parse(data, { columns: true }, (err, records: Questions[]) => {
        if (err) {
          return reject(err);
        }
        resolve(records);
      });
    });

    let questions = await parseCSV();
    if (fetchChoice) {
      const choice = Array.from(new Set(questions.map(question => question.choice)));
      return NextResponse.json({ choice });
    } 

    if (choice) {
      questions = questions.filter(question => question.choice === choice);
    }

    questions = questions.sort(() => 0.5 - Math.random()).slice(0, 1);

    return NextResponse.json(questions);
  } catch (err) {
    console.error('Error:', err); // Log errors
    return NextResponse.json({ error: 'Failed to process CSV file' }, { status: 500 });
  }
}
