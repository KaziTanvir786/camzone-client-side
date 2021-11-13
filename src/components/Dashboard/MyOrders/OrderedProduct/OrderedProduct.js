import React from 'react';

const OrderedProduct = (props) => {
    const { order } = props;
    return (
        <div>
            <div style={{ width: "90%" }} className="mx-auto card mb-3">
                <div className="row g-0">
                    <div className="col-md-3">
                        <img src={order.order_img} className="img-fluid rounded-start" alt="Loading..." />
                    </div>
                    <div className="col-md-5">
                        <div className="card-body">
                            <h5 className="card-title">{order.order_name}</h5>
                            <p className="card-text" style={{ textAlign: "justify" }}>{order.order_description}</p>
                            <p className="card-text text-danger">Price: ${order.order_price}</p>
                        </div>
                    </div>
                    <div style={{ borderLeft: "2px dashed grey" }} className="col-md-3">
                        <div className="card-body">
                            <h6>Booked By:</h6>
                            <h5 className="card-title">{order.user_name}</h5>
                            <p className="card-text">{order.user_address}</p>
                            <p className="card-text">{order.user_phone}</p>
                            <h3 className={order.status === 'Confirmed' ? "text-success" : "text-warning"}>{order.status}</h3>
                        </div>
                    </div>
                    {
                        order.status === "Pending" ?
                            <div className="col-md-1 d-flex justify-content-center align-items-center">
                                <div className="card-body">
                                    <button className="btn btn-outline-danger" onClick={() => props.handleDeleteOrder(order._id)} style={{ width: "80px", height: "80px", borderRadius: "50%" }}><i className="far fa-trash-alt"></i></button>
                                </div>
                            </div>
                            :
                            <div className="col-md-1 d-flex justify-content-center align-items-center">
                                <div className="card-body d-flex justify-content-center align-items-center">
                                    <i class="text-success fs-1 fas fa-check-circle"></i>
                                </div>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default OrderedProduct;