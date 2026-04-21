import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Private preview",
  robots: { index: false, follow: false },
};

type SearchParams = Promise<{ error?: string; from?: string }>;

export default async function UnlockPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { error, from } = await searchParams;
  const hasError = error === "1";

  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6">
      <form
        action="/api/unlock"
        method="post"
        className="w-full max-w-sm border border-border bg-surface p-8"
      >
        <p className="eyebrow">Mexus Advisory</p>
        <h1 className="font-display type-h2 mt-3 text-foreground">
          Private preview
        </h1>
        <p className="mt-3 text-sm text-foreground-muted">
          Enter the password to continue.
        </p>

        <label htmlFor="password" className="sr-only">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          autoFocus
          required
          className="mt-6 w-full border border-input-border bg-input px-3 py-2 text-foreground outline-none focus:border-border-strong"
        />

        {from ? <input type="hidden" name="from" value={from} /> : null}

        {hasError ? (
          <p className="mt-3 text-sm text-foreground" role="alert">
            Incorrect password.
          </p>
        ) : null}

        <button
          type="submit"
          className="mt-6 w-full bg-button-primary px-4 py-2 text-sm font-medium tracking-wide text-primary-foreground uppercase hover:bg-button-primary-hover"
        >
          Unlock
        </button>
      </form>
    </main>
  );
}
