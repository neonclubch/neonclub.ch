import Image from "next/image";

export default function Home() {
  return (
    <main className="container">
      <div className="banner">
        <Image
          className="logo"
          src="/logo.png"
          alt="NEON Logo"
          height={800}
          width={1808}
        />
        <h2>Neue Elektronische Organisation für Nachtkultur</h2>
        <p>Coming Soon!</p>
      </div>
    </main>
  );
}
