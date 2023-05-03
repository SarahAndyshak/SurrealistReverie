export const populateBubbles = (num, elementQuery, options) => {

  function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
  
  const defaultOptions = {
    riseSpeed: {
      base: 4,
      min: 20,
      max: 20,
    },
    weaveSpeed: {
      base: 1,
      min: 5,
      max: 5,
    },
  };

  options = { ...defaultOptions, ...options };
  console.log('options is', options)
  for (let i = 0; i < num; i++) {
    let bubble = document.createElement('div');
    bubble.classList.add('bubble');
    const randomRiseSpeed = options.riseSpeed.base + (randomInt(-(options.riseSpeed.min), options.riseSpeed.max)/10);
    const randomWeaveSpeed = options.weaveSpeed.base + (randomInt(-(options.weaveSpeed.min), options.weaveSpeed.max)/10);
    const randomSize = randomInt(150,300)/100;
    bubble.style.setProperty('--rise-speed', `${randomRiseSpeed}s`);
    bubble.style.setProperty('--weave-speed', `${randomWeaveSpeed}s`);
    bubble.style.setProperty('--size', `${randomSize}rem`);
    bubble.style.left = `${randomInt(window.innerWidth * -0.2, window.innerWidth * 1.2)}px`;
    bubble.style.animationDelay = `${i * 100}ms`;
    document.querySelector(elementQuery).appendChild(bubble);
  }
}