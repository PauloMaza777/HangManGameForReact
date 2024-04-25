import React, { useState, useEffect } from 'react';

// Define una interfaz para las propiedades del componente si es necesario
interface TimerComponentProps {
  interval?: number; // Intervalo para el temporizador
}

const TimerComponent: React.FC<TimerComponentProps> = ({ interval = 1000 }) => {
  const [seconds, setSeconds] = useState<number>(0); // Contador de segundos

  useEffect(() => {
    const key = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1); // Incrementa el contador
    }, interval);

    return () => {
      clearInterval(key); // Limpia el intervalo al desmontar el componente
    };
  }, [interval]); // Se ejecuta cuando el intervalo cambia

  // Calcula los minutos y segundos
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60; // Restante de segundos tras calcular minutos

  return (
    <div>
      <p>
        {minutes} : {remainingSeconds}  have passed!
      </p>
    </div>
  );
};

export default TimerComponent;
