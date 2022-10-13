import React from 'react'

const MenuCard = ({ menuData }) => {
    return (
        <div className="container">
            <div className="row">
                {menuData.map((currElem) => {
                    const{id, name,image,description,price,category} = currElem;
                    return (
                        <div className="col-md-4">
                            <div className="card shadow">
                                <h2 >{category}</h2>
                                <span className="card-circle">{id} </span>
                                <img
                                    className="card-img-top"
                                    src={image}
                                    alt="Card image cap"
                                />
                                <div className="card-body text-center">
                                    <h5 className="card-title">{name}</h5>
                                    <p className="card-text">{description} </p>
                                    <button href="#" className="btn btn-danger">{price}</button>
                                    <button className='btn btn-light'>Order Now</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )

}

export default MenuCard