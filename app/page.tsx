import Header from "@/components/header";
import Link from "next/link";

const Home = () => {
  return (
    <main>
      <Header />
      <p>
        <Link href="/about">About</Link>
      </p>
      <p>🔥 Let&apos;s get started! 🔥</p>
    </main>
  );
};

export default Home;
