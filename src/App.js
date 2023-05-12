import './App.css';
import Footer from './Components/shared/Footer';
import SudokuSolver from './Components/sudoku/SudokuSolver';

function App() {
  console.log(process.env.REACT_APP_APIKEY)
  return (
    <div className='bg-[#f4cccc] text-black w-full py-10 min-h-screen' >

      <SudokuSolver />
      <Footer/>
    </div>
  );
}

export default App;
