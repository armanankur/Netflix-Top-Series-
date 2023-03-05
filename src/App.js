import './App.css';
import Card from './Components/Card';
import SeriesData from './SeriesData';

function App() {

  const ncard=(elem)=>{
   return(
    <>
    <Card 
    imgsrc={elem.imgsrc} 
    stitle={elem.stitle}
    sname ={elem.sname}
    link= {elem.link} 
    />
    </>
   )
  }

  return (
    <div className="App">
      <h1 className='heading'>TOP NETFLIX SERIES</h1>
     { SeriesData.map(ncard)}
    </div>
  );
}

export default App;
