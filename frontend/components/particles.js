import TSParticles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Particles = () => {
    const particlesInit = async (main) => {
        await loadFull(main);
    }

    return <TSParticles
        init={particlesInit}
        options={{
            background: {
                color: {
                    value: "#c81d4a",
                },
            },
            fpsLimit: 60,
            // interactivity: {
            //     events: {
            //         onClick: {
            //             enable: true,
            //             mode: "push",
            //         },
            //         onHover: {
            //             enable: true,
            //             mode: "repulse",
            //         },
            //         resize: true,
            //     },
            //     modes: {
            //         push: {
            //             quantity: 4,
            //         },
            //         repulse: {
            //             distance: 200,
            //             duration: 0.4,
            //         },
            //     },
            // },
            particles: {
                color: {
                    value: "#ffffff",
                },
                links: {
                    color: "#ffffff",
                    distance: 150,
                    enable: true,
                    opacity: 0.3,
                    width: 1,
                },
                collisions: {
                    enable: true,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: false,
                    speed: 1,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        area: 1000,
                    },
                    value: 80,
                },
                opacity: {
                    value: 0,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 2, max: 4 },
                },
            },
            detectRetina: true,
        }}
    />
};

export default Particles;