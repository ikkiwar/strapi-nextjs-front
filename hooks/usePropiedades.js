import React from "react";
import styled from "@emotion/styled";

const Grid = styled.div`
  @media (min-width: 480px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 2rem;
    column-gap: 2rem;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const Card = styled.div`
  border: 1px solid #b5b5b5;
  background-color: #f5f5f5;

  img {
    max-width: 100%;
  }
`;

const Contenido = styled.div`
  padding: 1rem;
  h3 {
    margin: 0 0 2rem 0;
    font-size: 1.4rem;
    font-family: "lato", sans-serif;
  }
  ul {
    list-style: none;
    padding: 0;
    display: flex;
    width: 100%;
    justify-content: space-around;
  }
  ul li {
    display: flex;
  }
  ul li p {
    font-family: "lato", sans-serif;
    font-weight: 900;
  }
  ul li img {
    margin-right: 1rem;
  }
`;

const usePropiedades = (propiedades) => {
  const Propiedades = () => (
    <Grid>
      {propiedades.map((propiedad, count) => (
        <Card key={count}>
          <img src={`http://localhost:1337${propiedad.imagen[0].url}`} />
          <Contenido>
            <h3> {propiedad.nombre}</h3>
            <ul>
              <li>
                <img src="assets/img/bathroom.png" /> <p>{propiedad.wc}</p>
              </li>
              <li>
                <img src="assets/img/room.png" />{" "}
                <p>{propiedad.habitaciones}</p>
              </li>
              <li>
                <img src="assets/img/parking.png" />{" "}
                <p> {propiedad.estacionamiento}</p>
              </li>
            </ul>
          </Contenido>
        </Card>
      ))}
    </Grid>
  );

  return { Propiedades };
};

export default usePropiedades;
