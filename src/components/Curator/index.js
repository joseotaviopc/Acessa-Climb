import React from 'react';
import './styles.scss';
import curatorPhoto from '../../images/jose-otavio.png';

function CuratorItem() {

    return(
        <section className="curator__container">
            <div className="curator__photo">
                <img src={curatorPhoto} alt="Foto curador José Otavio" />
            </div>
            <div className="curator__details">
                <div>
                    <h3>José Otavio</h3>
                    <h6>Curadoria</h6>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores molestias fugiat omnis repellendus reiciendis. </p>
            </div>
        </section>
    )
};

export default CuratorItem;