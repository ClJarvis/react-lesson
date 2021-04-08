//challenge start with 5 then double with evet click


function Button() {
  const [counter, setCounter] = useState(5);
	return <button onClick={() => setCounter(counter*2)}>{counter}</button>;
}

ReactDOM.render(
  <Button />, 
  document.getElementById('mountNode'),
);

/////
function Button(props) {
//	const [counter, setCounter] = useState(0);
	return (
    <button onClick={props.onClickFunction}>
      +1
    </button>
    );
}

function Display(props) {
  return (
    <div>{props.message}</div>
  );
}

function App() {
  const [counter, setCounter] = useState(42);
  const incrementCounter = () => setCounter(counter+1);
  return (
  <div>
      <Button onClickFunction={incrementCounter}/>
      <Display message={counter}/>
  </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('mountNode'),
);
