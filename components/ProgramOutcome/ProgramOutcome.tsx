import Container from "@/shared/Container";

const ProgramOutcome = () => {
  return (
    <>
      <Container className="py-10  md:py-16 flex flex-col gap-4 justify-center items-center">
        <h2 className="uppercase text-3xl md:text-5xl text-center font-semibold">
          Join for Hot{" "}
          <span className="text-green-600 text-4xl md:text-6xl font-bold">
            Offers
          </span>
        </h2>
        <p className="text-base md:text-lg mt-2 text-gray-700 font-semibold text-center">
          Stay updated on exclusive offers and refreshing deals straight to your
          inbox. Don&apos;t miss out on your next favorite blend!
        </p>
        <form className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-4">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full sm:w-96 p-2 border-gray-300 rounded-md focus:border-green-600 outline-none border-2"
          />
          <button
            type="submit"
            className="w-full sm:w-24 bg-green-600 hover:bg-green-800 text-white p-2 rounded-md"
          >
            Subscribe
          </button>
        </form>
      </Container>
    </>
  );
};

export default ProgramOutcome;
