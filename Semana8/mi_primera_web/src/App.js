// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import "./App.css";
import Header from "./components/header";
import imagenLogo from "./logo.svg"


const App= () => {
  const[numero, setNumero] = useState(0);
  const sumarUnidad = () => setNumero(numero + 1);
  const restarUnidad = () => setNumero(numero - 1);
  

  return(
    <div>
      <Header nombre="Pepito"/>
    <h1>Hola mundo</h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam, accusamus commodi omnis corrupti earum officia nostrum quia dolores exercitationem quam numquam! Eos reiciendis veniam minus accusantium laboriosam aliquid possimus similique?
    </p>
    <h1>{numero}</h1>
    <button onClick={sumarUnidad}>Sumar</button>
    <button onClick={restarUnidad}>Restar</button>
    <img src={imagenLogo} alt="" />
    <div>
      <h2>Christian Julca</h2>
    </div>
    </div>
  );
};

export default App;