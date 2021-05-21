import * as React from 'react';

type CardProps = {
  title?: '',
  text?: '',
  imgSrc?: ''
}
const Card = ({ text, imgSrc, title }: CardProps) => {
    return (
        <div className="card" style={{ width: '18rem', height: '20rem' }}>
            {imgSrc ?
              <img src={imgSrc} className="card-img-top" alt="..." />
              :
              <div className="card-img-top bg-secondary w-100 h-100" style={{ height: '10rem' }} ></div>
            }
            <div className="card-body" style={{ height: '10rem' }}>
                <h5 className="card-title">
                  { title }
                </h5>
                <p className="card-text">
                    {text}
                </p>
            </div>
        </div>
    )
}

export default Card;
