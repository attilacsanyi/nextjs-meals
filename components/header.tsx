import Image from "next/image";

const Header = () => {
  return (
    <main>
      <Image
        src="/logo.png"
        width={200}
        height={200}
        alt="A server surrounded by magic sparkles."
      />
      <h1>Welcome to this NextJS Course!</h1>
    </main>
  );
};

export default Header;
