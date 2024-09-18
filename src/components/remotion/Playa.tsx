import React from "react";
import { Player } from "@remotion/player";
import { MyComp } from "../../../rem/Composition";


export const Playa: React.FC = () => {
    return (
        <div>
            <Player
                durationInFrames={300}
                fps={30}
                compositionWidth={360}
                compositionHeight={640}
                component={MyComp}
                controls
                style={{
                   

                    background: 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)',
                    backgroundBlendMode: 'multiply',

                }}
                clickToPlay
            />
        </div>
    );
};