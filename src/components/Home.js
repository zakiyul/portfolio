import image from "../web-background.png";

const Home = () => {
  return (
    <main>
      <img
        src={image}
        alt="background"
        className="absolute object-cover w-full h-full"
      />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h1 className="text-6xl text-green-800 lg:text-green-100 font-bold cursive leading-none lg:leading-snug  home-name">
          halo. <span className="text-green-800">saye</span> fikri.
        </h1>
      </section>
    </main>
  );
};

export default Home;
