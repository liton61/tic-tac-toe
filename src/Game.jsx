export default function Game() {
  function Square({ value }) {
    return (
      <button className="bg-white text-lg font-bold text-center uppercase border border-gray-400 w-12 h-12 m-1 leading-9">
        {value}
      </button>
    );
  }
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div>
        <div>
          <Square value={1} />
          <Square value={2} />
          <Square value={3} />
        </div>
        <div>
          <Square value={4} />
          <Square value={5} />
          <Square value={6} />
        </div>
        <div>
          <Square value={7} />
          <Square value={8} />
          <Square value={9} />
        </div>
      </div>
    </div>
  );
}
