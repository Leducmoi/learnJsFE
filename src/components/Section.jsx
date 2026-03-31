import React from 'react'

export const Section = (props) => {
    const orderImg = props.imagePosition === 'left' ? 'order-lg-1' : 'order-lg-2';
    const orderText = props.imagePosition === 'left' ? 'order-lg-2' : 'order-lg-1';
    
    return (
        <section id="scroll">
            <div className="container px-5">
                <div className="row gx-5 align-items-center">
                    <div className={`col-lg-6 ${orderImg}`}>
                        <div className="p-5"><img className="img-fluid rounded-circle" src={props.img} alt="..." /></div>
                    </div>
                    <div className={`col-lg-6 ${orderText}`}>
                        <div className="p-5">
                            <h2 className="display-4">{props.title}</h2>
                            <p>{props.detail}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}