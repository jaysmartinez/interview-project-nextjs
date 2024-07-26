import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`max-w-screen-lg mx-auto my-8 ${inter.className}`}
    >
      <div>
        Waiting for blog content ...
      </div>
    </main>
  );
}
