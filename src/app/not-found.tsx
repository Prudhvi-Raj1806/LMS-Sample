import Link from "next/link";
import { NeonButton } from "@/components/ui/NeonButton";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-6 text-foreground">
      <div className="max-w-md text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">404</p>
        <h1 className="mb-3 text-3xl font-bold">This lesson path does not exist.</h1>
        <p className="mb-6 text-sm text-muted-foreground">
          Head back to your dashboard and choose an available course.
        </p>
        <Link href="/dashboard">
          <NeonButton>Back to dashboard</NeonButton>
        </Link>
      </div>
    </div>
  );
}
