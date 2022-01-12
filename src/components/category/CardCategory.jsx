import React from 'react'
import {ButtonOrange} from '../../UI/Button';
import Zoom from 'react-reveal/Zoom';
function CardCategory({product}) {


    return (
        <div className="card-category-responsive">
              <Zoom>
              <article className='card-category-product'>
                <img src={product.image.desktop} alt={product.name}></img>
                <div className='card-category-body'>
             {product.new &&<p className='new-product-category'> new Product</p> } 
                <h4>{product.name}</h4>
                <p>{product.description}</p>
                <ButtonOrange text='see product' link={`/detailProduct/${product.name}`}/>
                </div>
            </article>
        </Zoom>
        </div>
    )
}

export default CardCategory
