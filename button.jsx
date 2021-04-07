function Button() {
  const [counter, setCounter] = useState(0);
	return <button>{Math.random()}</button>;
}

ReactDOM.render(
  <Button />, 
  document.getElementById('mountNode'),
);
