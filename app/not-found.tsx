import Link from "next/link";

export default function NotFound() {
  return (
    <html lang="en">
      <body className="flex min-h-screen items-center justify-center bg-paper text-ink">
        <div className="shell-gutter mx-auto max-w-3xl py-24 text-center">
          <p className="eyebrow text-gold">404</p>
          <h1 className="font-display mt-6 type-h1">This page could not be found.</h1>
          <p className="mt-6 text-ink-muted">
            The resource you are looking for is not available at this address.
          </p>
          <Link
            href="/"
            className="mt-10 inline-flex items-center gap-3 text-[0.9375rem] font-medium text-navy-900"
          >
            Return home →
          </Link>
        </div>
      </body>
    </html>
  );
}
