import { NextResponse } from 'next/server';
import { MongoClient, ServerApiVersion } from 'mongodb';
import clientPromise from '../../../lib/mongodb';

export async function POST(request: Request) {
  try {
    // Ensure the request body contains the necessary data
    const { product, website } = await request.json();

    if (!product) {
      return NextResponse.json({ error: 'Product Name is required' }, { status: 400 });
    }

      // Current timestamp
      const timestamp = new Date();

    // Connect to MongoDB and access the database
    const client = await clientPromise;
    const db = client.db('Advertisement');
    const collection = db.collection('clicks');

    // Increment the click count for the given product or insert a new record
    await collection.updateOne(
      { product, website },
        { 
        $inc: { count: 1 },
        $set: { timestamp }, // Store the timestamp
      },
      { upsert: true }
    );

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Error tracking click:', error);
    return NextResponse.json({ error: 'Failed to track click' }, { status: 500 });
  }
}



// Handle GET method to fetch all clicks
export async function GET(request: Request) {
    try {
      const client = await clientPromise;
      const db = client.db('Advertisement');
      const collection = db.collection('clicks');
  
      // Fetch all records from the collection (without any filters)
      const clicks = await collection.find({}).toArray();
  
      return NextResponse.json(clicks, { status: 200 });
    } catch (error) {
      console.error('Error fetching clicks:', error);
      return NextResponse.json({ error: 'Failed to fetch clicks' }, { status: 500 });
    }
  }