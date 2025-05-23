export const Title = ({ title }) => {
  return (
    <div className="my-6 md:my-12">
      <h2 className="text-center text-4xl md:text-7xl bg-gradient-to-br from-indigo-600 via-green-300 to-gray-200 text-transparent bg-clip-text font-extrabold">
        {title}
      </h2>
    </div>
  );
};
