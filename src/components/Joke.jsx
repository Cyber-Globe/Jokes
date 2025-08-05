import React from "react";
function Joke({ setup, Punchline }) {
  const [isShown, setisShown] = React.useState(false);
  function toggleShown() {
    setisShown((previshown) => !previshown);
  }
  console.log(isShown);

  return (
    <div>
      {setup && <h4>{setup}</h4>}
      {isShown && <p> {Punchline}</p>}
      <button onClick={toggleShown}>Show Punchline</button>
      <hr />
    </div>
  );
}
export default Joke;
