import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';

function App() {
  const [data, setData] = useState();

  useEffect(()=>{
    fetch('https://yts.mx/api/v2/list_movies.json')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setData(data.data.movies);
    });
  }, [])

  if(!data) return <div>Loading...</div>

  return (
    <div className="App">
      <div className="Layout">
        {
          data.map(i=>
           <Card info={i} key={i.id}/>
          )
        }
        </div>
      </div>
  );
}

export default App;
