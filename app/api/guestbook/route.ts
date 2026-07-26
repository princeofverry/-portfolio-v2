import { NextResponse } from "next/server";
import { redis } from "@/lib/redis";
import { guestbookData } from "@/data/portfolioData";
import { GuestbookEntry } from "@/types/portfolio";

const GUESTBOOK_REDIS_KEY = "verry_guestbook_entries";

export async function GET() {
  try {
    if (redis) {
      const entries = await redis.lrange<GuestbookEntry>(GUESTBOOK_REDIS_KEY, 0, -1);
      if (entries && entries.length > 0) {
        return NextResponse.json(entries);
      }
    }
    return NextResponse.json(guestbookData);
  } catch (error) {
    console.error("Error fetching guestbook entries:", error);
    return NextResponse.json(guestbookData);
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, message } = body;

    if (!name || !message || typeof name !== "string" || typeof message !== "string") {
      return NextResponse.json({ error: "Invalid name or message" }, { status: 400 });
    }

    const now = new Date();
    const formattedDate = new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    })
      .format(now)
      .toUpperCase();

    const newEntry: GuestbookEntry = {
      id: `gb-${Date.now()}`,
      name: name.trim(),
      message: message.trim(),
      date: formattedDate,
    };

    if (redis) {
      // Push new entry to the left (beginning) of the list
      await redis.lpush(GUESTBOOK_REDIS_KEY, newEntry);
    }

    return NextResponse.json(newEntry, { status: 201 });
  } catch (error) {
    console.error("Error saving guestbook entry:", error);
    return NextResponse.json({ error: "Failed to save entry" }, { status: 500 });
  }
}
