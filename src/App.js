import First from './components/first';
import './App.css';

function App() {
  const arr=[1,1,1,1,11,1,1,8]
  const obj={asD:'asd',asdasd:'123'}
  return (
      <>
      {Object.keys(obj).map(()=>(
        <First/>

      ))}
      </>
  );
}

export default App;
