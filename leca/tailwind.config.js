/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "bg-home" : "url('/homeBg.png')",
        "bg-ambo" : "url('/ambo.png')",
        "bg-buzos" : "url('/buzos.png')",
        "bg-calza" : "url('/calza.png')",
        "bg-camperas" : "url('/camperas.png')",
        "bg-cargo" : "url('/cargo.png')",
        "bg-chombas" : "url('/chombas.png')",
        "bg-joggin" : "url('/joggin.png')",
        "bg-musculosa" : "url('/musculosa.png')",
        "bg-remeras" : "url('/remeras.png')",
        "bg-uniforme" : "url('/uniforme.png')",
        "bg-medico" : "url('/medico.png')",
        "bg-sinmanga" : "url('/sinmanga.png')",
        "bg-us" : "url('/sobrenosotros.png')",
        "bg-corte" : "url('/corteyconfeccion.png')",
        "bg-terminado" : "url('/productoterminado.png')",
        "bg-estampados" : "url('/estampados.png')",
        "bg-bordados" : "url('/bordados.png')",
        "bg-jack" : "url('/jack.png')",
        "bg-janome" : "url('/janome.png')",
        "bg-cladd" : "url('/cladd.png')",
        "bg-americancotton" : "url('/americancotton.png')",
        "bg-testimonio" : "url('/testimonio.png')",
      },
      colors: {
        'main-bg' : '#0D0D25',
        'yellow' : '#FFD159'
      },
      fontFamily:{
         sans: ['var(--font-inter)']
      }
    },
  },
  plugins: [],
};
