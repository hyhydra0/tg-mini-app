import { useState } from "react";

const App: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div></div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p className="text-3xl font-bold underline text-red-500">
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs text-blue-400">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
};

export default App;
