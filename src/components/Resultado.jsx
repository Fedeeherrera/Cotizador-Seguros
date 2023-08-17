import useCotizador from "../hooks/useCotizador";
import { useCallback, useRef } from "react";
import { MARCAS, PLANES } from "../constants";

function Resultado() {
  const { resultado, datos } = useCotizador();
  const { marca, plan, year } = datos;
  const yearRef = useRef(year)

  const [nombreMarca] = useCallback(MARCAS.filter((m) => m.id === Number(marca)), [resultado]);
  const [nombrePlan] = useCallback(PLANES.filter((p) => p.id === Number(plan)), [resultado]);

  if (resultado === 0) return null;

  return (
    <div className="mt-5 bg-gray-100 text-center p-5 shadow">
      <h2 className="text-gray-600 font-black text-3xl">Resumen</h2>
      <p className="my-2 ">
        <span className="font-bold">Marca: {nombreMarca.nombre}</span>
      </p>
      <p className="my-2 ">
        <span className="font-bold">Plan: {nombrePlan.nombre}</span>
      </p>
      <p className="my-2 ">
        <span className="font-bold">Año del: {yearRef.current}</span>
      </p>
      <p className="my-2 text-2xl">
        <span className="font-bold">Total Cotizacion: {resultado}</span>
      </p>
    </div>
  );
}

export default Resultado;
