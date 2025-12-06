import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// Store data in a JSON file since we lack disk space for a full DB
const DATA_FILE = path.join(process.cwd(), 'src/data/schedule.json');

export async function GET() {
    try {
        const data = fs.readFileSync(DATA_FILE, 'utf8');
        return NextResponse.json(JSON.parse(data));
    } catch (error) {
        return NextResponse.json({ slots: [] }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { slots } = body;

        // Basic validation
        if (!slots || !Array.isArray(slots)) {
            return NextResponse.json({ error: 'Invalid data' }, { status: 400 });
        }

        fs.writeFileSync(DATA_FILE, JSON.stringify({ slots }, null, 2));

        return NextResponse.json({ success: true, slots });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to update' }, { status: 500 });
    }
}
