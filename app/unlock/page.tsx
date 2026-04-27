import type { Metadata } from "next";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "New website coming soon",
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
    <main className="flex min-h-screen items-center justify-center bg-background px-6 py-16">
      <div className="w-full max-w-md">
        <div className="border border-border bg-surface p-8">
          <p className="eyebrow">Mexus Advisory</p>
          <h1 className="font-display type-h2 mt-3 text-foreground">
            New website coming soon
          </h1>
          <p className="mt-4 text-sm leading-[1.6] text-foreground-muted">
            Our refreshed site is in private preview. To reach us in the
            meantime, please use the contact details below.
          </p>

          <dl className="mt-6 space-y-3 text-sm">
            <div className="flex flex-col gap-0.5">
              <dt className="eyebrow text-foreground-muted">Email</dt>
              <dd className="text-foreground">
                <a
                  href={`mailto:${site.email}`}
                  className="underline-offset-4 hover:underline"
                >
                  {site.email}
                </a>
              </dd>
            </div>
            <div className="flex flex-col gap-0.5">
              <dt className="eyebrow text-foreground-muted">WhatsApp</dt>
              <dd className="text-foreground">
                <a
                  href={`https://wa.me/${site.whatsappNumber}`}
                  className="underline-offset-4 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {site.whatsappDisplay}
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <form
          action="/api/unlock"
          method="post"
          className="mt-6 border border-border bg-surface p-8"
        >
          <p className="eyebrow text-foreground-muted">Private preview access</p>
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
      </div>
    </main>
  );
}
