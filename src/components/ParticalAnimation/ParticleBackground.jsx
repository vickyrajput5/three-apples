import { useEffect } from "react";

const ParticleBackground = () => {
  useEffect(() => {
    if (window.particlesJS) {
      window.particlesJS("particles-js", {
        particles: {
          number: {
            value: 350,
            density: {
              enable: true,
              value_area: 700,
            },
          },
          color: {
            value: "#182854",
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 0.8,
            random: true,
            anim: {
              enable: false,
              speed: 0.5,
              opacity_min: 0.3,
              sync: false,
            },
          },
          size: {
            value: 4,
            random: true,
            anim: {
              enable: true,
              speed: 20,
              size_min: 1,
              sync: false,
            },
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#182854",
            opacity: 0.5,
            width: 1,
          },
          move: {
            enable: true,
            speed: 3,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
          },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: {
              enable: true,
              mode: "grab",
            },
            onclick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 140,
              line_linked: {
                opacity: 1,
              },
            },
            bubble: {
              distance: 200,
              size: 40,
              duration: 2,
              opacity: 8,
              speed: 3,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
            push: {
              particles_nb: 4,
            },
            remove: {
              particles_nb: 2,
            },
          },
        },
        retina_detect: true,
      });
    }
  }, []);

  return <div id="particles-js" className="absolute z-0 bottom-0 left-0 w-full h-[200px] sm:h-[337px]"></div>;
};

export default ParticleBackground;
