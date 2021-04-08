function Button(props) {
//	const [counter, setCounter] = useState(0);
	return (
    <button onClick={props.onClickFunction}>
      +{props.increment}
    </button>
    );
}

function Display(props) {
  return (
    <div>{props.message}</div>
  );
}

function App() {
  const [counter, setCounter] = useState(0);
  const incrementCounter = () => setCounter(counter+1);
  const incrementCounter5 = () => setCounter(counter+5);
  const incrementCounter10 = () => setCounter(counter+10);
  const incrementCounter100 = () => setCounter(counter+100);
  const decrementCounter10 = () => setCounter(counter-10);
  return (
  <div>
      <Button onClickFunction={incrementCounter} increment={1}/>
      <Button onClickFunction={incrementCounter5} increment={5}/>
      <Button onClickFunction={incrementCounter10} increment={10}/>
      <Button onClickFunction={incrementCounter100} increment={100}/>
           <Button onClickFunction={decrementCounter10} increment={(-10)}/>
      <Display message={counter}/>
  </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('mountNode'),
);
