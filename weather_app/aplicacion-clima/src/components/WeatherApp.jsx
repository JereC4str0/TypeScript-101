import { useState } from "react";

export const WeatherApp = () => {
  const urlBase = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "1c4c9d9a2dc9b0f013ff412d53df2d58";
  const [ciudad, setCiudad] = useState("");
  const [dataClima, setDataClima] = useState(null);
  const difKelvin = 273.15;

  const handleCambiociudad = (e) => {
    setCiudad(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ciudad.length > 0) fetchClima();
  };

  const fetchClima = async () => {
    try {
      const response = await fetch(`${urlBase}?q=${ciudad}&appid=${API_KEY}`);
      const data = await response.json();
      setDataClima(data);
    } catch (error) {
      console.error("ERROR:", error);
    }
  };

  return (
    <div className="container">
      <h1>Aplicacíon del clima</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" value={ciudad} onChange={handleCambiociudad} />

        <button type="submit">Buscar</button>
      </form>
      {dataClima && (
        <div>
          <h2>{dataClima.name}</h2>
          <p>Temperature: {parseInt(dataClima.main.temp - difKelvin)}C</p>
          <p>condicion Meterologica{dataClima.weather[0].description}</p>
          <img src={`https://openweathermap.org/img/wn/${dataClima.weather[0].icon}@2x.png`}/> 
        </div>
      )}
    </div>
  );
};
