import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json(); // parse the incoming JSON

   const newUser = await prisma.user.create({
  data: {
    role_id: body.role_id,
    working_hours: body.working_hours,
    team_id: BigInt(body.team_id),
    name: body.name,
    surname: body.surname,
    phone_number: BigInt(body.phone_number),
    status_id: body.status_id,
  },
});

    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to create user" }, { status: 500 });
  }
}

export async function GET() {
  try {
    const users = await prisma.user.findMany();
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Failed to fetch users" },
      { status: 500 }
    );
  }
}
