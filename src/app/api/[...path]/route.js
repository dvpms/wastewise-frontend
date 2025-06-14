// src/app/api/[...path]/route.js
import { NextResponse } from "next/server";

async function handler(request, context) {
  const path = context.params.path.join("/");
  const backendUrl = process.env.API_BASE_URL_SERVER;

  try {
    const response = await fetch(`${backendUrl}/${path}`, {
      method: request.method,
      headers: {
        "Content-Type": "application/json",
        Authorization: request.headers.get("Authorization"),
      },
      body: request.method !== "GET" ? await request.text() : null,
      cache: "no-store",
    });

    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      const data = await response.json();
      return NextResponse.json(data, { status: response.status });
    }

    return new NextResponse(null, { status: response.status });
  } catch (error) {
    return NextResponse.json(
      {
        message: "Proxy error: Could not connect to backend server.",
        // Menambahkan detail error ke response agar bisa dilihat di browser
        errorDetails: {
          message: error.message,
          cause: error.cause ? error.cause.code : "N/A",
        },
      },
      { status: 502 }
    );
  }
}

export {
  handler as GET,
  handler as POST,
  handler as PATCH,
  handler as PUT,
  handler as DELETE,
};
