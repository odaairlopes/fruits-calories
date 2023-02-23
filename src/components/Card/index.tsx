/* 
Acredito que seja mais fácil fazer tudo em um componente só, passando as propriedades que queremos para os cards.
Irei passar via props, para que seja facilitada a leitura

*/

import "./styles.css";
import Modal from "../Modal";
import { useState } from "react";
import { IFruitList } from "../../types/fruits";

const Card = ({ fruits }: any) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = (fruit: IFruitList) => {
    window.localStorage.setItem("fruit", JSON.stringify(fruit));
    setIsOpen(true);
  };

  return (
    <div className="container-cards">
      {fruits &&
        fruits.map((fruit: IFruitList) => (
          <div className="container-card" key={fruit.name}>
            <div className="card-header" onClick={() => handleClick(fruit)}>
              <p className="card-name">{fruit.name}</p>
            </div>

            <img
              src={`${fruit.photo}`}
              className="card-photo"
              alt={fruit.name}
            />
          </div>
        ))}
      {isOpen && <Modal isOpen={isOpen} setIsOpen={setIsOpen} />}
    </div>
  );
};

export default Card;
