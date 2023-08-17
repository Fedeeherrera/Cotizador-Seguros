/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useState } from "react";
import {
  obtenerDiferenciaYear,
  calcularMarca,
  calcularPlan,
  formatearDinero,
} from "../helpers/index";

const CotizadorContext = createContext();

const CotizadorProvider = ({ children }) => {
  const [resultado, setResultado] = useState(0);
  const [error, setError] = useState("");
  const [cargando, setCargando] = useState(false);

  const [datos, setDatos] = useState({
    marca: "",
    year: "",
    plan: "",
  });

  const handleChangeDatos = (e) => {
    setDatos({ ...datos, [e.target.name]: e.target.value });
  };

  const cotizarSeguro = () => {
    let resultado = 2000;

    const diferencia = obtenerDiferenciaYear(datos.year);

    resultado -= (diferencia * 3 * resultado) / 100;

    resultado *= calcularMarca(datos.marca);

    resultado *= calcularPlan(datos.plan);

    resultado = formatearDinero(resultado);
    setCargando(true);
    setTimeout(() => {
      setResultado(resultado);
      setCargando(false)
    }, 2000);
  };

  const cotizadorContextValue = {
    handleChangeDatos,
    datos,
    setError,
    error,
    cotizarSeguro,
    resultado,
    cargando
  };

  return (
    <CotizadorContext.Provider value={cotizadorContextValue}>
      {children}
    </CotizadorContext.Provider>
  );
};

export { CotizadorProvider };
export default CotizadorContext;
