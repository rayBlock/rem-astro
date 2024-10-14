import React from "react";
import { Player } from "@remotion/player";
import { MyComp } from "../../../rem/Composition";


export const Playa: React.FC = () => {
    return (
        <div>
            <Player
                durationInFrames={300}
                fps={30}
                compositionWidth={720}
                compositionHeight={1280}
                component={MyComp}
                controls
                style={{    
                    height: "480px",
                    width: "270px",
                }}
                clickToPlay
            />
        </div>
    );
};