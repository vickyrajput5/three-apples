
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      "mini":"400px",
      'sm': '640px',    
      'md': '768px', 
      'lg-tab':'992px',   
      'lg': '1024px', 
      'lg-desk': '1100px', 
      'lgg': '1200px',   
      'xl': '1280px',   
      '2xl': '1536px',  
    },
    colors: {
      primary: '#001242',
      secondary: '#FFFFFF',
      headingColor:'#171A1F',
      sub1Color: '#323743',
      sub2Color:'#060606',
      borderColor:'#DEE1E6',
      btnColor: '#E98A14',
      edubgColor:'#F8F9FA',
      btnBgColor:'#FF56A5',
      expBtn:'#006CAA',
      proPlus: '#6D31ED',
      pro1:'#D3C1FA',
      pro2:'#B9E5FF',
      pro3:'#FFC9E2',
      pro4:'#FFF0AF',
      pro5:'#FDCFC4',
      avatarColor:'#F9623E',
      inputBorder:'#BDC1CA',
      copyColor:"#424856",
    },
   
    fontFamily: {
      heading: ['Poppins', 'sans-serif'],
      body: ['Manrope', 'sans-serif'],
    },
    
    extend: {
      spacing: {
        '15':'15px',
        '16':'16px',
        '18':'18px',
        '19':'19px',
        '20': '20px',
        '24': '24px',
        '25': '25px',
        '30': '30px',
        '32': '32px',
        '34':'34px',
        '36':'36px',
        '40': '40px',
        '44': '44px',
        '50': '50px',
        '56': '56px',
        '64': '64px',
        '72':'72px',
        '78':'78px',
        '100':'100px'
      },
      container: {
        center: true, 
        // padding: '0',
        screens: { 
          'sm': '100%',    
          'md': '768px', 
          'lg': '1024px',
          'xl': '1200px',
        },
      },
      boxShadow: {
        'custom-shadow': '0px 4px 9px 0px #171A1F1C, 0px 0px 2px 0px #171A1F1F',
      },
      keyframes: {
        pulse: {
          '0%': { transform: 'scale(0.8)' },
          '100%': { transform: 'scale(1.2)' },
        },
        flip: {
          '0%': { 
            transform: 'perspective(400px) rotateY(0)', 
            'animation-timing-function': 'ease-out' 
          },
          '40%': { 
            transform: 'perspective(400px) translateZ(150px) rotateY(170deg)', 
            'animation-timing-function': 'ease-out' 
          },
          '50%': { 
            transform: 'perspective(400px) translateZ(150px) rotateY(190deg) scale(1)', 
            'animation-timing-function': 'ease-in' 
          },
          '80%': { 
            transform: 'perspective(400px) rotateY(360deg) scale(0.95)', 
            'animation-timing-function': 'ease-in' 
          },
          '100%': { 
            transform: 'perspective(400px) scale(1)', 
            'animation-timing-function': 'ease-in' 
          },
        },
        hithere: {
          '30%': { transform: 'scale(1.2)' },
          '40%, 60%': { transform: 'rotate(-20deg) scale(1.2)' },
          '50%': { transform: 'rotate(20deg) scale(1.2)' },
          '70%': { transform: 'rotate(0deg) scale(1.2)' },
          '100%': { transform: 'scale(1)' },
        },
        gelatine: {
          '0%, 100%': { transform: 'scale(1, 1)' },
          '25%': { transform: 'scale(0.9, 1.1)' },
          '50%': { transform: 'scale(1.1, 0.9)' },
          '75%': { transform: 'scale(0.95, 1.05)' },
        },
        bounce: {
          '70%': { transform: 'translateY(0%)' },
          '80%': { transform: 'translateY(-15%)' },
          '90%': { transform: 'translateY(0%)' },
          '95%': { transform: 'translateY(-7%)' },
          '97%': { transform: 'translateY(0%)' },
          '99%': { transform: 'translateY(-3%)' },
          '100%': { transform: 'translateY(0)' },
        },
        rotatePingPong: {
          '0%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(4deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
      },
      animation: {
        pulse: 'pulse 1s infinite ease-in-out alternate',
        flip: 'flip 2s ease infinite',
        hithere: 'hithere 1s ease infinite',
        gelatine: 'gelatine 0.5s infinite',
        bounce: 'bounce 2s ease infinite',
        rotatePingPong: 'rotatePingPong 2s infinite ease-in-out',
      },
    
    },
  },
  plugins: [],
}
