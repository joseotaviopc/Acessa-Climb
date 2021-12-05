import React from "react";
import "./card.scss";
import Button from "../Button";
import iconAudio from "../../images/icon-audio-descricao 1.png";
import iconBanheiro from "../../images/icon-banheiro-acessivel.png";
import iconBraile from "../../images/icon-braile.png";
import iconCaoguia from "../../images/icon-caoguia.png";
import iconElevador from "../../images/icon-elevador.png";
import iconEstacionamento from "../../images/icon-estacionamento.png";
import iconLibras from "../../images/icon-libras.png";
import iconPisotatil from "../../images/icon-piso-tatil.png";
import iconPortalarga from "../../images/icon-porta-larga.png";
import iconRampa from "../../images/icon-rampa.png";


const Card = ({item}) => {
  return (
    <section className="card__container">
      <div className="card__image"></div>
      <div className="card__content">
        <h3>{item.name}</h3>
        <ul className="card__facilities">
          <li className={`card__facilities__item ${item.facilities[0]} ${!item.facilities[0].status ? 'card__facilities__item--unchecked' : '' }`}>
            <img
              src={iconBraile}
              alt="Sinalização em Braile"
              title="Sinalização em Braile"
            />
          </li>
          <li className={`card__facilities__item ${item.facilities[1]} ${!item.facilities[1].status ? 'card__facilities__item--unchecked' : '' }`}>
            <img
              src={iconAudio}
              alt="Áudio descrição"
              title="Áudio descrição"
            />
          </li>
          <li className={`card__facilities__item ${item.facilities[2]} ${!item.facilities[2].status ? 'card__facilities__item--unchecked' : '' }`}>
            <img
              src={iconBanheiro}
              alt="Banheiro acessível"
              title="Banheiro acessível"
            />
          </li>
          <li className={`card__facilities__item ${item.facilities[3]} ${!item.facilities[3].status ? 'card__facilities__item--unchecked' : '' }`}>
            <img
              src={iconElevador}
              alt={`${item.facilities[3]}`}
              title={`${item.facilities[3]}`}
            />
          </li>
          <li className={`card__facilities__item ${item.facilities[4]} ${!item.facilities[4].status ? 'card__facilities__item--unchecked' : '' }`}>
            <img
              src={iconCaoguia}
              alt="Permite acesso de cães-guias"
              title="Permite acesso de cães-guias"
            />
          </li>
          <li className={`card__facilities__item ${item.facilities[5]} ${!item.facilities[5].status ? 'card__facilities__item--unchecked' : '' }`}>

            <img
              src={iconEstacionamento}
              alt="Estacionamento para idosos / deficientes"
              title="Estacionamento para idosos / deficientes"
            />
          </li>
          <li className={`card__facilities__item ${item.facilities[6]} ${!item.facilities[6].status ? 'card__facilities__item--unchecked' : '' }`}>
            <img
              src={iconPisotatil}
              alt="Piso tátil de alerta"
              title="Piso tátil de alerta"
            />
          </li>
          <li className={`card__facilities__item ${item.facilities[7]} ${!item.facilities[7].status ? 'card__facilities__item--unchecked' : '' }`}>
            <img src={iconPortalarga} alt="Portas largas" title="Portas largas" />
          </li>
          <li className={`card__facilities__item ${item.facilities[8]} ${!item.facilities[8].status ? 'card__facilities__item--unchecked' : '' }`}>
            <img
              src={iconRampa}
              alt="Rampas de acesso para cadeirante"
              title="Rampas de acesso para cadeirante"
            />
          </li>
          <li className={`card__facilities__item ${item.facilities[9]} ${!item.facilities[9].status ? 'card__facilities__item--unchecked' : '' }`}>
            <img
              src={iconLibras}
              alt="Atendimento em Libras"
              title="Atendimento em Libras"
            />
          </li>
        </ul>
        <p>{item.description}</p>
        <Button>Como chegar</Button>
      </div>
    </section>
  );
};

export default Card;