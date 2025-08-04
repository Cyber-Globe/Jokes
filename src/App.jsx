import Joke from "./components/Joke";
import jokesData from "./jokesData";

function App() {
  const jokesElements = jokesData.map((joke) => {
    return <Joke key={joke.id} setup={joke.Setup} Punchline={joke.Punchline} />;
  });
  return (
    <>
      <div className="jokes-container">
        <h3>My Jokes </h3>
        {jokesElements}
      </div>
    </>
  );
}

export default App;
