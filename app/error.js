"use client";
import Button from "@/app/_ui/Button";
import Link from "next/link";

export default function Error({ error, reset }) {
  return (
    <section className="mt-32 flex h-screen flex-col items-center gap-14">
      <div className="space-y-3 text-center">
        <h2>Something went wrong!</h2>
        <p className="text-primary-400">{error.message}</p>
      </div>
      <Link href="/">
        <Button onClick={() => reset()}>Return Home</Button>
      </Link>
    </section>
  );
}
