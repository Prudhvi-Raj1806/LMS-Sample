"use client";

import { useEffect } from "react";
import { NeonButton } from "@/components/ui/NeonButton";

export default function ErrorPage({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-6 text-foreground">
      <div className="max-w-md text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-destructive">Something went wrong</p>
        <h1 className="mb-3 text-3xl font-bold">The learning workspace could not load.</h1>
        <p className="mb-6 text-sm text-muted-foreground">
          Try again, and if it keeps happening we will have a useful error boundary in place for monitoring.
        </p>
        <NeonButton onClick={() => unstable_retry()}>Try again</NeonButton>
      </div>
    </div>
  );
}
