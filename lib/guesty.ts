const TOKEN_URL = "https://booking.guesty.com/oauth2/token";
const API_BASE  = "https://booking.guesty.com/api";

export type GuestyListing = {
  _id: string;
  title: string;
  bedrooms: number;
  bathrooms: number;
  accommodates: number;
  address: { city: string; neighborhood: string; street: string; state: string };
  pictures: { original: string; thumbnail: string }[];
  publicDescription: { summary: string; space: string };
  amenities: string[];
  prices: { basePrice: number; currency: string };
  tags: string[];
};

export async function getGuestyToken(): Promise<string> {
  const res = await fetch(TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type:    "client_credentials",
      client_id:     process.env.GUESTY_CLIENT_ID ?? "",
      client_secret: process.env.GUESTY_CLIENT_SECRET ?? "",
      scope:         "open-api",
    }),
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Guesty token failed: " + res.status);
  const data = await res.json();
  return data.access_token as string;
}

export async function fetchListings(limit = 25, skip = 0): Promise<GuestyListing[] | null> {
  try {
    const token = await getGuestyToken();
    const res = await fetch(`${API_BASE}/listings?limit=${limit}&skip=${skip}`, {
      headers: { Authorization: `Bearer ${token}` },
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data.results ?? data;
  } catch { return null; }
}

export async function fetchListing(id: string): Promise<GuestyListing | null> {
  try {
    const token = await getGuestyToken();
    const res = await fetch(`${API_BASE}/listings/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    return res.json();
  } catch { return null; }
}

export const PLACEHOLDER_LISTINGS: Partial<GuestyListing>[] = [
  { _id: "p1", title: "The Loop Modern 2BR",       bedrooms: 2, bathrooms: 1, accommodates: 4, address: { city: "Chicago", neighborhood: "The Loop",    street: "208 S LaSalle St",     state: "IL" }, pictures: [{ original: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80", thumbnail: "" }] },
  { _id: "p2", title: "Uptown Executive 3BR",      bedrooms: 3, bathrooms: 2, accommodates: 6, address: { city: "Chicago", neighborhood: "Uptown",      street: "4600 N Clark St",      state: "IL" }, pictures: [{ original: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&q=80", thumbnail: "" }] },
  { _id: "p3", title: "South Loop Retreat 4BR",    bedrooms: 4, bathrooms: 2, accommodates: 8, address: { city: "Chicago", neighborhood: "South Loop",  street: "1901 S Michigan Ave",  state: "IL" }, pictures: [{ original: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80", thumbnail: "" }] },
  { _id: "p4", title: "Streeterville Luxury 2BR",  bedrooms: 2, bathrooms: 2, accommodates: 4, address: { city: "Chicago", neighborhood: "Streeterville", street: "401 E Ontario St",   state: "IL" }, pictures: [{ original: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80", thumbnail: "" }] },
  { _id: "p5", title: "River North Penthouse 3BR", bedrooms: 3, bathrooms: 2, accommodates: 6, address: { city: "Chicago", neighborhood: "River North",  street: "215 W Illinois St",    state: "IL" }, pictures: [{ original: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80", thumbnail: "" }] },
  { _id: "p6", title: "Wicker Park Hideaway 2BR",  bedrooms: 2, bathrooms: 1, accommodates: 4, address: { city: "Chicago", neighborhood: "Wicker Park",  street: "1646 N Damen Ave",    state: "IL" }, pictures: [{ original: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80", thumbnail: "" }] },
  { _id: "p7", title: "Lincoln Park Garden 3BR",   bedrooms: 3, bathrooms: 2, accommodates: 6, address: { city: "Chicago", neighborhood: "Lincoln Park", street: "2300 N Clark St",      state: "IL" }, pictures: [{ original: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80", thumbnail: "" }] },
  { _id: "p8", title: "West Loop Loft 2BR",        bedrooms: 2, bathrooms: 2, accommodates: 4, address: { city: "Chicago", neighborhood: "West Loop",    street: "800 W Fulton Market",  state: "IL" }, pictures: [{ original: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=800&q=80", thumbnail: "" }] },
];
