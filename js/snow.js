tsParticles.load("tsparticles", {
    particles: {
        number: {
            value: 100, // Jumlah partikel (salju)
            density: {
                enable: true,
                value_area: 800,
            },
        },
        color: {
            value: "#ffffff", // Warna partikel
        },
        shape: {
            type: "circle", // Bentuk partikel
        },
        opacity: {
            value: 0.8,
            random: true,
        },
        size: {
            value: 5,
            random: true,
        },
        move: {
            enable: true,
            speed: 2, // Kecepatan partikel
            direction: "bottom",
            random: false,
            straight: false,
            out_mode: "out",
        },
    },
    interactivity: {
        detectsOn: "canvas",
        events: {
            onhover: {
                enable: false, // Tidak ada interaksi pada hover
            },
            onclick: {
                enable: false, // Tidak ada interaksi pada klik
            },
            resize: true,
        },
    },
    retina_detect: true,
});