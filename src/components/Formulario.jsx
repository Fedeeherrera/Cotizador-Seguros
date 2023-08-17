/* eslint-disable no-empty-pattern */
import { Fragment } from "react";
import { MARCAS, YEARS, PLANES } from "../constants/index.js";
import useCotizador from "../hooks/useCotizador.jsx";
import Error from "./Error.jsx";

function Formulario() {
  const { handleChangeDatos, datos, setError, error, cotizarSeguro } = useCotizador();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(datos).includes("")) {
      setError(`Todos Los Campos Son Obligatorios`);
      return;
    }
    setError("");
    cotizarSeguro()
  };

  return (
    <>
      {error && <Error />}
      <form onSubmit={handleSubmit}>
        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-400 uppercase">
            Marca
          </label>
          <select
            name="marca"
            className="w-full p-3 bg-white border border-gray-200"
            onChange={(e) => handleChangeDatos(e)}
            value={datos.marca}
          >
            <option value=""> -- Selecione Marca --</option>
            {MARCAS.map((marca) => (
              <option value={marca.id} key={marca.id}>
                {marca.nombre}
              </option>
            ))}
          </select>
        </div>
        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-400 uppercase">
            Año
          </label>
          <select
            name="year"
            className="w-full p-3 bg-white border border-gray-200"
            onChange={(e) => handleChangeDatos(e)}
            value={datos.year}
          >
            <option value=""> -- Selecione Año --</option>
            {YEARS.map((year) => (
              <option value={year} key={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <div className="my-5">
          <label className="block mb-3 font-bold text-gray-400 uppercase">
            Elige Un Plan
          </label>
          <div className="flex gap-3 items-center">
            {PLANES.map((plan) => (
              <Fragment key={plan.id}>
                <label>{plan.nombre}</label>
                <input
                  type="radio"
                  name="plan"
                  value={plan.id}
                  onChange={(e) => handleChangeDatos(e)}
                />
              </Fragment>
            ))}
          </div>
        </div>
        <input
          type="submit"
          className="w-full bg-indigo-500 hover:bg-indigo-600 transitio-colors text-white cursor-pointer p-3 uppercase font-bold"
          value="cotizar"
        />
      </form>
    </>
  );
}

export default Formulario;
