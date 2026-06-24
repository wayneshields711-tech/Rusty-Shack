import Link from "next/link";

export default function AboutApoIsland() {
  return (
    <main>
      <header className="header">
        <nav className="nav">
          <Link href="/">← Back to the shop</Link>
        </nav>
        <h1>About Apo Island</h1>
        <p>A little volcanic gem in the Philippines</p>
      </header>

      <section className="about">
        <p>
          Welcome to Apo Island, a tiny volcanic paradise off the coast of
          Negros Oriental where crystal-clear waters and vibrant coral reefs
          are home to some of the friendliest sea turtles you&apos;ll ever
          meet. Whether you&apos;re here to snorkel, dive, or simply soak up the
          sun, we&apos;re so glad you came to explore this little slice of ocean
          heaven with us.
        </p>
      </section>
    </main>
  );
}
