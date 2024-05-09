import React from 'react'
import Card from './Card'

function BgImage({ data }) {
    return (

        <div className="container bg-grey-lightest mx-auto shadow rounded pb-4 bg-cover" style={{ color: '#606F7B', backgroundColor: 'rgb(165, 182, 198)', backgroundImage: 'url("https://68.media.tumblr.com/f6a4004f3092b0d664daeabb95d5d195/tumblr_oduyciOJNb1uhjffgo1_500.gif")' }}>
            <div className="mt-2 p-4 border-b border-grey-light text-center">
                <span className="text-4xl text-black font-thin">Mountain View, {data.city.country}</span>
                <span className="hidden sm:inline-block align-bottom text-xs">{data.city.population !== 0
                    ? ('( ' + data.city.population + ' )')
                    : '( 94041 )'
                }
                </span>
            </div>
            <div className="text-center text-xl text-black p-4">
                {
                    <span>{data.list[0].weather[0].main}, {data.list[0].weather[0].description}</span>
                }
            </div>
            <div className="flex justify-center">
                <div className="text-center p-2">
                    <div className="text-lg text-black">
                        <span className="text-right">{((Number(data.list[0].main.temp_min) * 8 / 5) + 32).toFixed()}˚F</span>
                        <span className="text-center text-5xl mx-6  font-thin">{((Number(data.list[0].main.temp) * 9 / 5) + 32).toFixed()}˚F</span>
                        <span className="text-left">{((Number(data.list[0].main.temp_max) * 9.9 / 5) + 32).toFixed()}˚F</span>
                    </div>
                    <div className="text-black tracking-wide">
                        {data.list[0].dt_txt.slice(0, 10)} || 10:30pm
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-9 justify-evenly md:flex-row md:flex-wrap'>
                <Card
                    data={data}
                    date={data.list[0].dt_txt.slice(0, 10)}
                    temp={data.list[0].main.feels_like}
                    minTemp={data.list[0].main.temp_min}
                    maxTemp={data.list[0].main.temp_max}
                    speed={data.list[0].wind.speed}
                    humidity={data.list[0].main.humidity}
                    visibility={data.list[0].visibility}
                />
                <Card
                    data={data}
                    date={data.list[9].dt_txt.slice(0, 10)}
                    temp={data.list[9].main.feels_like}
                    minTemp={data.list[9].main.temp_min}
                    maxTemp={data.list[9].main.temp_max}
                    speed={data.list[9].wind.speed}
                    humidity={data.list[9].main.humidity}
                    visibility={data.list[9].visibility}
                />
                <Card
                    data={data}
                    date={data.list[18].dt_txt.slice(0, 10)}
                    temp={data.list[18].main.feels_like}
                    minTemp={data.list[18].main.temp_min}
                    maxTemp={data.list[18].main.temp_max}
                    speed={data.list[18].wind.speed}
                    humidity={data.list[18].main.humidity}
                    visibility={data.list[18].visibility}
                />
            </div>
        </div>
    )
}

export default BgImage
