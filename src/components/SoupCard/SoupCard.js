import React from "react";
import "./SoupCard.css";

const SoupCard = props => (
    <div className="card">
        <div className="img-container">
            <a onClick={() => props.selectDog(props.bran)} 
                className={props.curScore === 0 ? "style_prevu_kit style_prevu_kit_ex" : "style_prevu_kit"}
            >
                <img alt={props.brand} src={props.image} />
            </a>
        </div>
    </div>
);

export default SoupCard;
