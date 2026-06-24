const products = [
  { name: "Snorkel Mask", price: 24 },
  { name: "Beach Umbrella", price: 35 },
  { name: "Surf Wax", price: 6 },
];

export default function Home() {
  return (
    <main>
      <header className="header">
        <h1>The Rusti Shack</h1>
        <p>Beach and dive gear for Apo Island and beyond.</p>
      </header>

      <section className="products">
        {products.map((product) => (
          <article className="card" key={product.name}>
            <h2>{product.name}</h2>
            <span className="price">${product.price}</span>
            <button className="buy" type="button">
              Buy
            </button>
          </article>
        ))}
      </section>
    </main>
  );
}
