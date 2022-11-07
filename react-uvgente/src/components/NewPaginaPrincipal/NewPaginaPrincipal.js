import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './new-pagina-principal.css';
import { FaAngleLeft, FaAngleRight, FaProcedures } from 'react-icons/fa';
import CardServicios from '../Servicio/CardServicios';
import CardVenta from '../Ventas/CardVenta';

import cat1 from '../../media/cat_pp.jpg';
import cat2 from '../../media/cat2.png';
import cat3 from '../../media/cat3.jpg';
import cat4 from '../../media/cat4.jpg';
import cat5 from '../../media/cat5.jpg';
import cat6 from '../../media/cat6.jpg';
import DefaultImageUser from '../../media/cat_pp.jpg';
import BookExample from '../../media/book_example.jpg';

const NewPaginaPrincipal = () => {
  const [products, setProduts] = useState([]);
  const [tutors, setTutors] = useState([]);
  const tutores = [
    {
      id: 1,
      name: 'Juan',
      carne: 20012,
      calification: 5,
      isVerified: true,
      topPerformance: {
        Matemática: 5,
        Física: 4,
        'Química G.': 3,
      },
      cobro: ['Horas Beca'],
      image: cat1,
      tel: '4444-4444',
    },
    {
      id: 3,
      name: 'Juana',
      carne: 20007,
      calification: 4,
      isVerified: false,
      topPerformance: {
        Matemática: 5,
        Física: 4,
        'Química G.': 3,
      },
      cobro: ['Horas Beca'],
      image: cat3,
      tel: '4444-4445',
    },
    {
      id: 4,
      name: 'Gerardo',
      carne: 19012,
      calification: 4,
      isVerified: false,
      topPerformance: {
        Matemática: 5,
        Física: 4,
        'Química G.': 3,
      },
      cobro: ['Horas Beca'],
      image: cat4,
      tel: '4444-4446',
    },
    {
      id: 5,
      name: 'MariLuz',
      carne: 20003,
      calification: 4,
      isVerified: false,
      topPerformance: {
        Matemática: 5,
        Física: 4,
        'Química G.': 3,
      },
      cobro: ['Horas Beca'],
      image: cat5,
      tel: '4444-4447',
    },
    {
      id: 6,
      name: 'Lourdes',
      carne: 20017,
      calification: 5,
      isVerified: true,
      topPerformance: {
        Matemática: 5,
        Física: 4,
        'Química G.': 3,
      },
      cobro: ['Horas Beca'],
      image: cat6,
      tel: '4444-4448',
    },
  ];

  useEffect(() => {
    axios
      .get('http://localhost:8080/get-products')
      .then((res) => setProduts(res.data));
    axios
      .get('http://localhost:8080/get-tutors')
      .then((res) => {
        setTutors(res.data);
      })
      .then(console.log(tutors));

    /*     const fetchData = async ()=>{
      const tutoresFetch =  await axios.get('http://localhost:8080/get-tutors').then(async res => {
        res.data.map(async tutor => {
            await axios.get( `http://localhost:8080/get-tutor-cobro/${tutor.id}`).then(res =>{
              tutor['cobro']=res.data.map(cobroObj => cobroObj.forma_de_cobro)
            })
            await axios.get( `http://localhost:8080/get-tutor-class/${tutor.id}`).then(resp =>{
              tutor['topPerformance'] ={}
              resp.data.forEach((element)=>{
                tutor['topPerformance'][element.nombre] = element.performance 
              })
            })
            return tutor
        })
        setTutors(res.data)
      }
      )
    }
    fetchData() */
  }, []);
  return (
    <>
      <div id="main-container-new-pagina-principal-productos">
        <div className="title-and-filters-wrapper">
          <Link to="/top-servicios">
            <button className="titulo-new-pagina-principal-productos">
              <p className="new-p title-size-main-page">Tutores</p>
            </button>
          </Link>
        </div>
        <div className="carrousel-tutores-pagina-principal">
          {tutores.map((tutor) => {
            return <CardServicios tutor={tutor} />;
          })}
        </div>
      </div>
      <div id="main-container-new-pagina-principal-productos">
        <div className="title-and-filters-wrapper">
          <Link to="/top-ventas">
            <button className="titulo-new-pagina-principal-productos">
              <p className="new-p title-size-main-page">Productos</p>
            </button>
          </Link>
        </div>
        <div className="carrousel-tutores-pagina-principal">
          {products.map((venta) => {
            return <CardVenta product={venta} />;
          })}
        </div>
      </div>
    </>
  );
};

export default NewPaginaPrincipal;
