import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image className="grow" src="logo.svg" alt="NEON Logo" width={500} height={125} />
    </main>
  );
}
