import './App.css';

<style>
@import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Caveat&family=Dancing+Script&family=Fjalla+One&family=Phudu&family=Poppins:wght@300&family=Rajdhani:wght@300&display=swap');
</style>

function CalcButton({label}) {
  return (
    <button className='CalcButton'>
      {label}
    </button>
  );
}

function CalcDisplay({display}) {
  return (
    <div className='CalcDisplay'>
      {display}
    </div>
  );
}

function App() {
  return (
  <div className="CalcContainer"> 
  <CalcDisplay display={"Hello World!"} />
    <div className="ButtonContainer"> 
      < CalcButton label={7}/> 
      < CalcButton label={8}/> 
      < CalcButton label={9}/> 
      < CalcButton label={"+"}/> 
      < CalcButton label={4}/> 
      < CalcButton label={5}/> 
      < CalcButton label={6}/> 
      < CalcButton label={"-"}/> 
      < CalcButton label={1}/> 
      < CalcButton label={2}/> 
      < CalcButton label={3}/> 
      < CalcButton label={"*"}/> 
      < CalcButton label={"C"}/> 
      < CalcButton label={0}/> 
      < CalcButton label={"="}/> 
      < CalcButton label={"÷"}/> 
      <button className='surname'> Ladao </button>
    </div> 
  </div>
  );
}

export default App;
