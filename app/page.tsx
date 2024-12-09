import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <main>
      <Image
        src="/logo.png"
        width={200}
        height={200}
        alt="A server surrounded by magic sparkles."
      />
      <h1>Welcome to this NextJS Course!</h1>
      <p>
        <Link href="/about">About</Link>
      </p>
      <p>🔥 Let&apos;s get started! 🔥</p>
    </main>
  );
};

export default Home;
