// src/app/api/[...path]/route.js
import { NextResponse } from "next/server";

async function handler(request, context) {
  // Dapatkan path dinamis (misal: 'classify', 'login', dll.)
  const path = context.params.path.join("/");
  const backendUrl = process.env.API_BASE_URL_SERVER;

  try {
    // Teruskan request ke server backend dengan body dan header asli
    const response = await fetch(`${backendUrl}/${path}`, {
      method: request.method,
      headers: {
        // Teruskan header Authorization jika ada
        Authorization: request.headers.get("Authorization"),
        // Untuk upload, biarkan `fetch` mengatur 'Content-Type' secara otomatis
        // berdasarkan body. Jangan set manual.
        "Content-Type": request.headers.get("content-type"),
      },
      body: request.body, // Teruskan body sebagai stream
      duplex: "half", // Wajib ada untuk streaming body di Node.js fetch
      cache: "no-store",
    });

    // Buat respons baru untuk dikirim kembali ke client
    // Ini memastikan header dari backend juga diteruskan dengan benar
    const responseHeaders = new Headers(response.headers);
    const data = await response.text();

    return new Response(data, {
      status: response.status,
      headers: responseHeaders,
    });
  } catch (error) {
    console.error("--- PROXY ERROR ---", error);
    return NextResponse.json(
      { message: "Proxy error.", error: error.message },
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
