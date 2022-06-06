import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { FaFilter } from 'react-icons/fa'
import './new-ventas-style.css'
import CardVenta from './CardVenta'
import BookExample from '../../media/book_example.jpg'

const NewVentas = (props) => {
    const [isTopVentas, setIsTopVentas] = useState(false)
    const [products, setProduts] = useState( [])
    useEffect(()=>{
        axios.get('http://localhost:8080/get-products').then(res =>{
          setProduts(res.data)
        })
      })
    return (
        <div id="main-container-new-ventas">
            <div className='title-and-filters-wrapper'>
                <button className='titulo-pagina-new-ventas'>
                        <p className='new-p'>{props.title}</p>
                        <FaFilter/>
                </button>
            </div>

            <div id="productos-main-container-wrapper"><div id='productos-main-container'>
                {products.map((venta)=>{
              return (
                <CardVenta
                  product={venta}
                />
              )
                })

                }
            </div></div>
        </div>
    )
}

export default NewVentas