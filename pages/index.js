import React, { useEffect, useState } from "react";
import Head from "next/head";
import usePropiedades from "../hooks/usePropiedades";
import axios from "axios";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import useFiltro from "../hooks/useFiltro";

const Contenedor = styled.div`
  margin: 0 auto;
  width: 95%;
  maxwidth: 1200px;
`;

const Home = () => {
  const [PropiedadesData, setPropiedadesData] = useState([]);
  const [filtradas, setFiltradas] = useState([]);
  const { Propiedades } = usePropiedades(filtradas);
  const { categoria, FiltroUI } = useFiltro();

  useEffect(() => {
    if (categoria) {
      console.log(categoria, PropiedadesData);
      const filter = PropiedadesData.filter(
        (propiedad) => propiedad.categoria.id == categoria
      );
      console.log("envio", filter);
      setFiltradas(filter);
    } else {
      const obtenerPropiedades = async () => {
        const resultado = await axios.get("http://localhost:1337/propiedades");

        setPropiedadesData(resultado.data);
        setFiltradas(resultado.data);
      };

      obtenerPropiedades();
    }
  }, [categoria]);

  return (
    <Contenedor>
      <Head>
        <title>Ejemplo Headless CMS con Strapi</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Lato&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
          integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </Head>
      <FiltroUI />
      <h2
        css={css`
          text-align: center;
          font-family: "lato", sans-serif;
        `}
      >
        Nuestras Casas y Departamentos
      </h2>
      <Propiedades />
    </Contenedor>
  );
};

export default Home;
