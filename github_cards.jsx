class Card extends React.Component {
  render() {
    return (
    <div className="gitHub-Profile">
               <img src="https://via.placeholder.com/75" />
        <div className="info">
          <div className="name">Name here ..</div>
          <div className="company">Company here...</div>
        </div>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
   return (
     <div>
     <div className='header'>{this.props.title}</div>
     <Card />
     </div>
    );
  }
}


//const App = ({title}) => (
//  <div className="header">{title}</div>
// );

ReactDOM.render(
	<App title="The GitHub Cards App" />,
  mountNode,
);
