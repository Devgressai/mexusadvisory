export const AUTH_COOKIE = "mexus-unlock";

export async function hashPassword(password: string): Promise<string> {
  const data = new TextEncoder().encode(`mexus-v1:${password}`);
  const hash = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hash))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}
