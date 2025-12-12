export async function POST(req: Request) {
  const { message } = await req.json();

  const apiKey = process.env.GEMINI_API_KEY;

  console.log("Server API Key:", apiKey);

  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: message }] }],
      }),
    }
  );

  const data = await res.json();
  return Response.json(data);
}
