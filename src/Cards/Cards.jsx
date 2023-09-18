import { useEffect, useState } from "react";
import SingleCard from "../SingleCard/SingleCard";

const Cards = () => {
    const [cards, setCards] = useState([])
    useEffect(()=>{
        fetch("data.json")
        .then(res => res.json())
        .then(result => setCards(result))
    },[])
    return (
        <div className="grid grid-cols-1 gap-8 justify-center md:grid md:grid-cols-2 md:gap-8 lg:grid lg:grid-cols-3 lg:gap-8">
            {
                cards.map(singleCard => (
                    // console.log(singleCard),
                    <SingleCard key={singleCard.id} singleCard={singleCard}></SingleCard>
                ))
            }
        </div>
    );
};

export default Cards;