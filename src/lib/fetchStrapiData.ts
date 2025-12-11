export async function fetchStrapiData(endpoint: string, locale: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/${endpoint}/full?locale=${locale}`,
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch ${endpoint}: ${res.statusText}`);
    }
    const json = await res.json();
    return json.data[0];
  } catch (error) {
    console.error(error);
    return null; // or handle the error as needed
  }
}
