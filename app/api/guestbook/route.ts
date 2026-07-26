import { NextResponse } from "next/server";
import { redis } from "@/lib/redis";
import { GuestbookEntry } from "@/types/portfolio";

export const dynamic = "force-dynamic";
export const revalidate = 0;

const GUESTBOOK_REDIS_KEY = "verry_guestbook_entries";

export async function GET() {
  try {
    if (redis) {
      const rawEntries = await redis.lrange(GUESTBOOK_REDIS_KEY, 0, -1);
      if (rawEntries && rawEntries.length > 0) {
        const parsedEntries: GuestbookEntry[] = rawEntries.map((item: any) => {
          if (typeof item === "string") {
            try {
              return JSON.parse(item);
            } catch {
              return item;
            }
          }
          return item;
        });
        return NextResponse.json(parsedEntries);
      }
    }
    return NextResponse.json([]);
  } catch (error) {
    console.error("Error fetching guestbook entries:", error);
    return NextResponse.json([]);
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
      // Store stringified JSON entry in Redis list
      await redis.lpush(GUESTBOOK_REDIS_KEY, JSON.stringify(newEntry));
    }

    return NextResponse.json(newEntry, { status: 201 });
  } catch (error) {
    console.error("Error saving guestbook entry:", error);
    return NextResponse.json({ error: "Failed to save entry" }, { status: 500 });
  }
}
