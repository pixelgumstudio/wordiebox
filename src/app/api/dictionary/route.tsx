import { NextResponse } from 'next/server';
import clientPromise from '../../../lib/mongodb';
import fs from 'fs';
import path from 'path';
import { parse } from 'csv-parse';

// Function to read and parse CSV file
const parseCSV = async () => {
  const filePath = path.join(process.cwd(), 'public', 'english.csv');

  try {
    const data = fs.readFileSync(filePath, 'utf8');

    return new Promise<{ Word: string; Meaning: string }[]>((resolve, reject) => {
      parse(data, { columns: true }, (err, records) => {
        if (err) {
          return reject(err);
        }
        resolve(records);
      });
    });
  } catch (err) {
    console.error('Error reading CSV:', err);
    return [];
  }
};

// Handle GET request
export async function GET(request: Request) {
  try {
    const client = await clientPromise;
    const db = client.db('WordDatabase'); // Change to your database name
    const collection = db.collection('words');

    // Get today's date (YYYY-MM-DD)
    const today = new Date().toISOString().split('T')[0];

    // Check if today's word is already in the database
    const existingWord = await collection.findOne({ date: today });

    if (existingWord) {
      return NextResponse.json(existingWord, { status: 200 });
    }

    // Parse CSV and get words
    let words = await parseCSV();

    if (words.length === 0) {
      return NextResponse.json({ error: 'CSV file is empty' }, { status: 500 });
    }

    // Shuffle words and pick one
    const randomWord = words.sort(() => 0.5 - Math.random())[0];

    // Save the new word to MongoDB
    const newWord = {
      word: randomWord.Word,
      meaning: randomWord.Meaning,
      date: today,
    };

    await collection.insertOne(newWord);

    return NextResponse.json(newWord, { status: 200 });
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json({ error: 'Failed to fetch word' }, { status: 500 });
  }
}
