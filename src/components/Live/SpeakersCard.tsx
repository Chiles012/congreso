import React from "react";

type Props = {
    image: string;
    flexDir: "row" | "row-reverse" | "column" | "column-reverse";
};

const SpeakersCard: React.FC<Props> = ({ image, flexDir }) => {
    return (
        <div className="speakers-card" style={{ flexDirection: flexDir }}>
            <div className="speakers-image">
                <img src={image} alt="speakerimg" />
            </div>
            <div className="speakers-info">
                <div className="triangle">
                    <h2 className="speakers-card-title">Speaker</h2>
                    <p className="speakers-subtitle">Lorem Subtittle</p>
                </div>
            </div>
        </div>
    );
};

export default SpeakersCard;