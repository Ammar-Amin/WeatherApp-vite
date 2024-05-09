import React from 'react'
import BgImage from './components/BgImage'
import { useState } from 'react';

function App() {
  let [data, setData] = useState(null)
  const [input, setInput] = useState('')

  let apiKey = "939ffd985af821d0c9955913ddb9fc17";
  let apiUrl = "https://api.openweathermap.org/data/2.5/forecast?&units=metric"

  async function getWeather() {
    let res = await fetch(apiUrl + `&appid=${apiKey}` + `&q=${input}`)
    let resData = await res.json();
    console.log(resData);
    if (resData) {
      setData(resData)
    }

  }

  const handleSubmit = (e) => {
    e.preventDefault()
    getWeather();
    setInput('')
  }


  return (
    <div>
      <h1 className='text-center text-white text-4xl font-medium'>Weather App</h1>
      <form onSubmit={handleSubmit} className='w-[300px] sm:w-[400px] mx-auto my-6 flex'>
        <input type='text' className='flex-1 py-1 px-3 text-black border-none outline-none rounded-l-lg' placeholder='Enter Your City' value={input} onChange={(e) => setInput(e.target.value)} />
        <input type='submit' className='px-4 py-1 text-white font-bold bg-blue-500 hover:bg-blue-600 rounded-r-lg' value='Search' />
      </form>
      {data ?
        <BgImage data={data} />
        : <h1 className='py-44 text-4xl text-center text-white'>What's your City Name?</h1>
      }
    </div>
  )
}

export default App
