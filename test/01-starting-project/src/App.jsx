

function Header() {
  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        Fundamental React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function CoreConcepts(props){
  return ( <li>
  <img src="" alt="" />
  <h1>{props.Title}</h1>
  <h4>{props.description} </h4>
  </li>)
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
      </main>
      <CoreConcepts/>
    </div>
  );
}

export default App;
