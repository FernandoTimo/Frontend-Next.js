import { useState, useEffect } from 'react';
/**
 * ⚡ Hoook UseCounter ⚡ Devuelve los valores intermedios de el min-max en un intervalo de tiempo
 * @param {number} max Valor final del contador 🔥 requiered = true
 * @param {number} [min] Valor inicial del contador 🔥 default value = 0
 * @param {boolean} [start]  🔥 default value = false
 */
export default function useCounter(max, min, start) {
  const [Counter, setCounter] = useState(min ? min : 0);
  const animate = typeof start === 'boolean' ? start : true;
  const increment = (min ? max - min : max) / (14 * max.toString().length);
  if (!max) {
    throw new Error(
      '⚡ useCounter => Proporcionar un valor de tipo number como parámetro parametro, ejemplo: useCounter(4286) ⚡'
    );
  }
  useEffect(() => {
    if (animate) {
      var currentCounter;
      if (Counter !== max) {
        currentCounter = setInterval(() => {
          setCounter(
            max < 0
              ? Counter -
                  (increment > max - Counter ? -increment : Counter - max)
              : Counter +
                  (increment < max - Counter ? increment : max - Counter)
          );
        }, 14);
      }
      return () => {
        clearInterval(currentCounter);
      };
    } else {
      setCounter(min ? min : 0);
    }
  }, [Counter, animate]);

  return Math.round(Counter);
}
