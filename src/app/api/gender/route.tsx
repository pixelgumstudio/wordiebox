import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse';

interface Gender {
  Gender: string;
  Language: string;
  // Add other fields as necessary
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const gender = searchParams.get('gender');
  const language = searchParams.get('language');
  const number = parseInt(searchParams.get('number') || '10', 10);

  const filePath = path.join(process.cwd(), 'public', 'gender.csv');

  try {
    const data = fs.readFileSync(filePath, 'utf8');

    const parseCSV = () => new Promise<Gender[]>((resolve, reject) => {
      parse(data, { columns: true }, (err, records: Gender[]) => {
        if (err) {
          return reject(err);
        }
        resolve(records);
      });
    });

    let names = await parseCSV();

    // Filter by type and gender if provided
    if (gender && gender !== 'any') {
      names = names.filter(name => name.Gender.toLowerCase() === gender);
      if(language){
        names = names.filter(name => name.Language.toLowerCase() === language);
      }
    }
    

    // Handle random selection
      names = names.sort(() => 0.5 - Math.random()).slice(0, number);
 

    return NextResponse.json(names);
  } catch (err) {
    console.error('Error:', err); // Log errors
    return NextResponse.json({ error: 'Failed to process CSV file' }, { status: 500 });
  }
}
