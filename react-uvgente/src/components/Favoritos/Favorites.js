import React from "react";
import CardServicios from "../Servicio/CardServicios";
import CardVenta from '../Ventas/CardVenta';
import { useState } from "react";

import "./Favorites.css";
import cat1 from '../../media/cat_pp.jpg'
import cat2 from '../../media/cat2.png'
import cat3 from '../../media/cat3.jpg'
import cat4 from '../../media/cat4.jpg'
import cat5 from '../../media/cat5.jpg'
import cat6 from '../../media/cat6.jpg'
import BookExample from '../../media/book_example.jpg'

function Favorites() {
    const tutores = [
        {
            id: 1, 
            name: 'Juan',
            carne: 2012, 
            calification: 5, 
            isVerified: true,
            topPerformance: {
                "Matemática": 5, 
                "Física":  4, 
                "Química G.": 3
            },
            cobro: ["Horas Beca"],
            image: cat1
        },
        {
            id: 2, 
            name: 'MariLuz', 
            carne: 2011,
            calification: 2, 
            isVerified: true,
            topPerformance: {
                "Matemática": 5, 
                "Física":  4, 
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
                "Física":  4, 
                "Química G.": 3
            },
            cobro: ["Horas Beca"],
            image: cat3
        },
        {
            id: 4, 
            name: 'Gerardo', 
            carne: 2012,
            calification: 4, 
            isVerified: false,
            topPerformance: {
                "Matemática": 5, 
                "Física":  4, 
                "Química G.": 3
            },
            cobro: ["Horas Beca"],
            image: cat4
        },
        {
            id: 5, 
            name: 'MariLuz', 
            calification: 4, 
            isVerified: false,
            topPerformance: {
                "Matemática": 5, 
                "Física":  4, 
                "Química G.": 3
            },
            cobro: ["Horas Beca"],
            image: cat5
        },
        {
            id: 6, 
            name: 'Lourdes', 
            calification: 5, 
            isVerified: true,
            topPerformance: {
              "Matemática": 5, 
              "Física":  4, 
              "Química G.": 3
            },
            cobro: ["Horas Beca"],
            image: cat6
        }
    ]

    const [productosInfo, setProductosInfo] = useState([
        {
            user: {
                id: 10,
                name: 'Mauricio Gomez', 
                rate: 5
            },
            product: {
                title: 'Libro 1', 
                description:'Este es el mejor libro de todos, por favor comprarlo pq esta mamadisimo si que si',
                prod_rate: 3,
                price: 200,
                state: 'Usado'
                
            }
        },
        {
            user: {
                id: 11,
                name: 'Mario Gonzalez', 
                rate: 5
            },
            product: {
                title: 'Libro 2', 
                description:'Este es el mejor libro de todos, por favor comprarlo pq esta mamadisimo si que si',
                prod_rate: 4,
                price: 150,
                state: 'Nuevo'
                
            }
        },
        {
            user: {
                id: 10,
                name: 'Luis Alejo', 
                rate: 5
            },
            product: {
                title: 'Libro 3', 
                description:'Este es el mejor libro de todos, por favor comprarlo pq esta mamadisimo si que si',
                prod_rate: 4,
                price: 500,
                state: 'Usado'
                
            }
        },
        {
            user: {
                id: 10,
                name: 'Luis Alejo', 
                rate: 5
            },
            product: {
                title: 'Libro 3', 
                description:'Fugiat do reprehenderit elit sit deserunt ad irure anim quis tempor. Non adipisicing nulla excepteur dolor sunt. Lorem dolor laborum id amet culpa nostrud sint ut sint reprehenderit pariatur. Aliqua aliqua veniam minim cillum proident fugiat. Dolore laboris mollit cillum nisi eu fugiat velit labore et. Fugiat culpa eu deserunt nostrud velit cupidatat enim ex proident officia tempor nostrud. Velit ut id sit elit tempor id dolore ipsum. In non fugiat veniam anim reprehenderit non eiusmod reprehenderit in voluptate consequat irure consequat. Veniam esse cupidatat qui ullamco. In laboris id ut amet nisi. Culpa velit elit nisi fugiat minim do in proident ut esse magna adipisicing ad id. Ullamco commodo sit adipisicing adipisicing ea. Lorem ea ad ipsum anim proident aliquip ipsum ea anim ullamco.',
                prod_rate: 4,
                price: 500,
                state: 'Usado'
                
            }
        },
        {
            user: {
                id: 10,
                name: 'Luis Alejo', 
                rate: 5
            },
            product: {
                title: 'Libro 3', 
                description:'Fugiat do reprehenderit elit sit deserunt ad irure anim quis tempor. Non adipisicing nulla excepteur dolor sunt. Lorem dolor laborum id amet culpa nostrud sint ut sint reprehenderit pariatur. Aliqua aliqua veniam minim cillum proident fugiat. Dolore laboris mollit cillum nisi eu fugiat velit labore et. Fugiat culpa eu deserunt nostrud velit cupidatat enim ex proident officia tempor nostrud. Velit ut id sit elit tempor id dolore ipsum. In non fugiat veniam anim reprehenderit non eiusmod reprehenderit in voluptate consequat irure consequat. Veniam esse cupidatat qui ullamco. In laboris id ut amet nisi. Culpa velit elit nisi fugiat minim do in proident ut esse magna adipisicing ad id. Ullamco commodo sit adipisicing adipisicing ea. Lorem ea ad ipsum anim proident aliquip ipsum ea anim ullamco.',
                prod_rate: 4,
                price: 500,
                state: 'Usado'
                
            }
        },
        {
            user: {
                id: 10,
                name: 'Luis Alejo', 
                rate: 5
            },
            product: {
                title: 'Libro 3', 
                description:'Fugiat do reprehenderit elit sit deserunt ad irure anim quis tempor. Non adipisicing nulla excepteur dolor sunt. Lorem dolor laborum id amet culpa nostrud sint ut sint reprehenderit pariatur. Aliqua aliqua veniam minim cillum proident fugiat. Dolore laboris mollit cillum nisi eu fugiat velit labore et. Fugiat culpa eu deserunt nostrud velit cupidatat enim ex proident officia tempor nostrud. Velit ut id sit elit tempor id dolore ipsum. In non fugiat veniam anim reprehenderit non eiusmod reprehenderit in voluptate consequat irure consequat. Veniam esse cupidatat qui ullamco. In laboris id ut amet nisi. Culpa velit elit nisi fugiat minim do in proident ut esse magna adipisicing ad id. Ullamco commodo sit adipisicing adipisicing ea. Lorem ea ad ipsum anim proident aliquip ipsum ea anim ullamco.',
                prod_rate: 4,
                price: 500,
                state: 'Usado'
                
            }
        },
        {
            user: {
                id: 10,
                name: 'Luis Alejo', 
                rate: 5
            },
            product: {
                title: 'Libro 3', 
                description:'Fugiat do reprehenderit elit sit deserunt ad irure anim quis tempor. Non adipisicing nulla excepteur dolor sunt. Lorem dolor laborum id amet culpa nostrud sint ut sint reprehenderit pariatur. Aliqua aliqua veniam minim cillum proident fugiat. Dolore laboris mollit cillum nisi eu fugiat velit labore et. Fugiat culpa eu deserunt nostrud velit cupidatat enim ex proident officia tempor nostrud. Velit ut id sit elit tempor id dolore ipsum. In non fugiat veniam anim reprehenderit non eiusmod reprehenderit in voluptate consequat irure consequat. Veniam esse cupidatat qui ullamco. In laboris id ut amet nisi. Culpa velit elit nisi fugiat minim do in proident ut esse magna adipisicing ad id. Ullamco commodo sit adipisicing adipisicing ea. Lorem ea ad ipsum anim proident aliquip ipsum ea anim ullamco.',
                prod_rate: 4,
                price: 500,
                state: 'Usado'
                
            }
        }
    ])
    
    return(
        <div className='mainContainer'>
            <div className="itemsContainer">
                <div className="products_column">
                    <h3>Productos</h3>
                    {productosInfo.map((venta)=>{
                        let src = (venta.user.id===10)?BookExample:null
                        return <CardVenta product={venta.product} user={venta.user} productImage={src}/>
                    })  

                    }
                        
                </div>
                <div className="services_column">
                    <h3>Servicios</h3>
                    {tutores.map((tutor)=>{
                        return <CardServicios tutor={tutor}/>
                    
                    })  

                    }
                </div>
            </div>
        </div>
    )
}

export default Favorites;