gsap.registerPlugin(CSSRule, ScrollTrigger)

gsap.from('.animate-right', {
  scrollTrigger: {
    trigger: '.animate-right',
    toggleActions: 'restart reset restart pause',
  },
  duration: 0.75,
  opacity: 0,
  x: '-100vw',
})

gsap.from('.animate-left', {
  scrollTrigger: {
    trigger: '.animate-left',
    toggleActions: 'restart reset restart pause',
  },
  duration: 0.75,
  opacity: 0,
  x: '100vw',
})

gsap.from('.fade-up', {
  scrollTrigger: {
    trigger: '.fade-up',
    toggleActions: 'restart reset reset pause',
  },
  duration: 0.75,
  opacity: 0,
  y: '10vh',
})
