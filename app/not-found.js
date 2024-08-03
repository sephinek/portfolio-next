import Link from "next/link";
import Button from "./_ui/Button";

export default function NotFound() {
  return (
    <section className="mt-32 flex h-screen flex-col items-center gap-14">
      <h2>Page could not be found. Want to learn anything else?</h2>
      <Link href="/">
        <Button>Return Home</Button>
      </Link>
    </section>
  );
}
