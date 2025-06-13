// src/app/api/[...path]/route.js
import { NextResponse } from "next/server";

export async function handler(request, context) {
  const backendUrl = process.env.API_BASE_URL_SERVER;
  const { path } = context.params;
  const fullPath = path.join("/");

  try {
    const response = await fetch(`${backendUrl}/${fullPath}`, {
      method: request.method,
      headers: {
        "Content-Type": "application/json",
        Authorization: request.headers.get("Authorization"),
      },
      body: request.method !== "GET" ? await request.text() : null,
    });

    const data = await response.json();
    return NextResponse.json(data, { status: response.status });
  } catch (error) {
    return NextResponse.json({ message: "Proxy error" }, { status: 500 });
  }
}

export const GET = handler;
export const POST = handler;
export const PATCH = handler;
