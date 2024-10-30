import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Zad1} from './Components/Zad1';
import { Zad2 } from './Components/Zad2';
function App() {
  const [count, setCount] = useState(0)

    
  return (
    <>
      {/*<div className='container'>
        <div className='row'>
          <div className='col-6'>Kolumna 1</div>
          <div className='col-6'>Kolumna 2</div>
        </div>
      </div>
      <button className='btn btn-primary'>Przycisk kliknij mnie!</button>

      <div className='card'>
        <div className='card-body'>
          <h5 className='crd-title'>Tytuł karty</h5>
          <p className='card-text'>To jest karta bootstrapa.</p>
          <a href="#" className='btn btn-primary'>Przycisk</a>
        </div>
      </div>*

      <form>
        <div className='mb3'>
          <label htmlFor="email" className='form-label'>Adres email</label>
          <input type="email" className="form-control" id="email" />
        </div>
        <div className='mb3'>
          <label htmlFor="password" className='form-label'>Hasło</label>
          <input type="password" className="form-control" id="password" />
        </div>
        <button className='btn btn-primary'>Zaloguj!</button>
      </form>
      */}

      {/*<Zad1/>*/}

      <Zad2/>
        
    </>
  )
}

export default App
