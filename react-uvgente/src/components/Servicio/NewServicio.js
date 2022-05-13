import React from 'react'
import { FaFilter } from 'react-icons/fa'
import CardServicios from './CardServicios'
import './new-servicio-style.css'
import cat1 from '../../media/cat_pp.jpg'
import cat2 from '../../media/cat2.png'
import cat3 from '../../media/cat3.jpg'
import cat4 from '../../media/cat4.jpg'
import cat5 from '../../media/cat5.jpg'
import cat6 from '../../media/cat6.jpg'

const NewServicio = (props) => {
    const tutores = [
        {
            id: 1,
            name: 'Juan',
            carne: 20012,
            calification: 5,
            isVerified: true,
            topPerformance: {
                "Matemática": 5,
                "Física": 4,
                "Química G.": 3
            },
            cobro: ["Horas Beca"],
            image: cat1,
        },
        {
            id: 2,
            name: 'MariLuz',
            carne: 18011,
            calification: 2,
            isVerified: true,
            topPerformance: {
                "Matemática": 5,
                "Física": 4,
                "Química G.": 3
            },
            cobro: ["Horas Beca"],
            image: cat2
        },
        {
            id: 3,
            name: 'Juana',
            carne: 20007,
            calification: 4,
            isVerified: false,
            topPerformance: {
                "Matemática": 5,
                "Física": 4,
                "Química G.": 3
            },
            cobro: ["Horas Beca"],
            image: cat3
        },
        {
            id: 4,
            name: 'Gerardo',
            carne: 19012,
            calification: 4,
            isVerified: false,
            topPerformance: {
                "Matemática": 5,
                "Física": 4,
                "Química G.": 3
            },
            cobro: ["Horas Beca"],
            image: cat4
        },
        {
            id: 5,
            name: 'MariLuz',
            carne: 20003,
            calification: 4,
            isVerified: false,
            topPerformance: {
                "Matemática": 5,
                "Física": 4,
                "Química G.": 3
            },
            cobro: ["Horas Beca"],
            image: cat5
        },
        {
            id: 6,
            name: 'Lourdes',
            carne: 20017,
            calification: 5,
            isVerified: true,
            topPerformance: {
                "Matemática": 5,
                "Física": 4,
                "Química G.": 3
            },
            cobro: ["Horas Beca"],
            image: cat6
        }
    ]
    return (
        <div id="main-container-new-servicios">
            <div className='title-and-filters-wrapper'>
                <button className='titulo-pagina-new-servicios'>
                    <p className='new-p'>{props.title}</p>
                    <FaFilter />
                </button>
            </div>

            <div id="servicios-main-container-wrapper"><div id='servicios-main-container'>

                {tutores.map((tutor) => {
                    return <CardServicios tutor={tutor} />

                })

                }

            </div></div>
        </div>
    )
}

export default NewServicio