import React from "react";
import GifGridItem from "./GifGridItem";
import { useFetchGifs } from "../Hooks/useFetchGifs";

const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h3 className='animate__animated animate__fadeIn'> {category} </h3>

      {loading && <p className='animate__animated__flash'>Cargando</p>}

      <div className='card-grid'>
        {images.map((img) => {
          return <GifGridItem key={img.id} {...img} />;
        })}
      </div>
    </>
  );
};

export default GifGrid;
