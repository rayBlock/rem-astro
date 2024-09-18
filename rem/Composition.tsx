import {  useCurrentFrame, interpolate } from "remotion";


export const MyComp: React.FC = () => {

    const frame = useCurrentFrame();
    const some = interpolate(frame, [0, 100], [0, 10]);
    const sin = Math.sin(some);

    // console.log(sin);

    return (
        <div style={{
            fontSize: "65px", display: "flex", fontWeight: "bold",
            width: "100%", height: "100%", background: `linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)`,
            justifyContent: "center", alignItems: "center", color: 'white',
        }}>
            <span style={{ transform: `rotate(${sin * 4}deg)` }}>

                hello world
            </span>
        </div>
    );
};