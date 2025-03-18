const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://localhost:1337/api";

export async function fetchAPI(endpoint: string) {
  try {
    const res = await fetch(`${API_URL}/${endpoint}`, {
      cache: "no-store", // Prevents caching in Next.js App Router
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.statusText}`);
    }

    const { data } = await res.json();
    return data;
  } catch (error) {
    console.error("API Fetch Error:", error);
    return null;
  }
}