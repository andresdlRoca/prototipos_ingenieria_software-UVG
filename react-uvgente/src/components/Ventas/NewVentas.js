import React, { useState } from 'react'
import { FaFilter } from 'react-icons/fa'
import './new-ventas-style.css'
import CardVenta from './CardVenta'
import BookExample from '../../media/book_example.jpg'

const NewVentas = (props) => {
    const [isTopVentas, setIsTopVentas] = useState(false)
    const [productosInfo, setProductosInfo] = useState([
        {
            user: {
                id: 10,
                name: 'Mauricio Gomez',
                rate: 5
            },
            product: {
                title: 'Libro 1',
                description: 'Este es el mejor libro de todos, por favor comprarlo pq esta mamadisimo si que si',
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
                description: 'Este es el mejor libro de todos, por favor comprarlo pq esta mamadisimo si que si',
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
                description: 'Este es el mejor libro de todos, por favor comprarlo pq esta mamadisimo si que si',
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
                description: 'Fugiat do reprehenderit elit sit deserunt ad irure anim quis tempor. Non adipisicing nulla excepteur dolor sunt. Lorem dolor laborum id amet culpa nostrud sint ut sint reprehenderit pariatur. Aliqua aliqua veniam minim cillum proident fugiat. Dolore laboris mollit cillum nisi eu fugiat velit labore et. Fugiat culpa eu deserunt nostrud velit cupidatat enim ex proident officia tempor nostrud. Velit ut id sit elit tempor id dolore ipsum. In non fugiat veniam anim reprehenderit non eiusmod reprehenderit in voluptate consequat irure consequat. Veniam esse cupidatat qui ullamco. In laboris id ut amet nisi. Culpa velit elit nisi fugiat minim do in proident ut esse magna adipisicing ad id. Ullamco commodo sit adipisicing adipisicing ea. Lorem ea ad ipsum anim proident aliquip ipsum ea anim ullamco.',
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
                description: 'Fugiat do reprehenderit elit sit deserunt ad irure anim quis tempor. Non adipisicing nulla excepteur dolor sunt. Lorem dolor laborum id amet culpa nostrud sint ut sint reprehenderit pariatur. Aliqua aliqua veniam minim cillum proident fugiat. Dolore laboris mollit cillum nisi eu fugiat velit labore et. Fugiat culpa eu deserunt nostrud velit cupidatat enim ex proident officia tempor nostrud. Velit ut id sit elit tempor id dolore ipsum. In non fugiat veniam anim reprehenderit non eiusmod reprehenderit in voluptate consequat irure consequat. Veniam esse cupidatat qui ullamco. In laboris id ut amet nisi. Culpa velit elit nisi fugiat minim do in proident ut esse magna adipisicing ad id. Ullamco commodo sit adipisicing adipisicing ea. Lorem ea ad ipsum anim proident aliquip ipsum ea anim ullamco.',
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
                description: 'Fugiat do reprehenderit elit sit deserunt ad irure anim quis tempor. Non adipisicing nulla excepteur dolor sunt. Lorem dolor laborum id amet culpa nostrud sint ut sint reprehenderit pariatur. Aliqua aliqua veniam minim cillum proident fugiat. Dolore laboris mollit cillum nisi eu fugiat velit labore et. Fugiat culpa eu deserunt nostrud velit cupidatat enim ex proident officia tempor nostrud. Velit ut id sit elit tempor id dolore ipsum. In non fugiat veniam anim reprehenderit non eiusmod reprehenderit in voluptate consequat irure consequat. Veniam esse cupidatat qui ullamco. In laboris id ut amet nisi. Culpa velit elit nisi fugiat minim do in proident ut esse magna adipisicing ad id. Ullamco commodo sit adipisicing adipisicing ea. Lorem ea ad ipsum anim proident aliquip ipsum ea anim ullamco.',
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
                description: 'Fugiat do reprehenderit elit sit deserunt ad irure anim quis tempor. Non adipisicing nulla excepteur dolor sunt. Lorem dolor laborum id amet culpa nostrud sint ut sint reprehenderit pariatur. Aliqua aliqua veniam minim cillum proident fugiat. Dolore laboris mollit cillum nisi eu fugiat velit labore et. Fugiat culpa eu deserunt nostrud velit cupidatat enim ex proident officia tempor nostrud. Velit ut id sit elit tempor id dolore ipsum. In non fugiat veniam anim reprehenderit non eiusmod reprehenderit in voluptate consequat irure consequat. Veniam esse cupidatat qui ullamco. In laboris id ut amet nisi. Culpa velit elit nisi fugiat minim do in proident ut esse magna adipisicing ad id. Ullamco commodo sit adipisicing adipisicing ea. Lorem ea ad ipsum anim proident aliquip ipsum ea anim ullamco.',
                prod_rate: 4,
                price: 500,
                state: 'Usado'

            }
        }
    ])
    return (
        <div id="main-container-new-ventas">
            <div className='title-and-filters-wrapper'>
                <button className='titulo-pagina-new-ventas'>
                    <p className='new-p'>{props.title}</p>
                    <FaFilter />
                </button>
            </div>

            <div id="productos-main-container-wrapper"><div id='productos-main-container'>
                {productosInfo.map((venta) => {
                    if (venta.user && venta.product) {
                        let src = (venta.user.id === 10) ? BookExample : null
                        return <CardVenta onTopVentas={true} product={venta.product} user={venta.user} productImage={src} />
                    }
                })

                }
            </div></div>
        </div>
    )
}

export default NewVentas