import confetti from 'canvas-confetti';

export const blastConfetti = () => {
  const count = 200;
  const defaults = {
    origin: { y: 0.7 },
    spread: 360,
    ticks: 50,
    gravity: 0,
    decay: 0.94,
    startVelocity: 30,
    colors: [
      '#FF0000',  // Vivid Red
      '#FF8C00',  // Orange
      '#FFD700',  // Gold
      '#32CD32',  // Lime Green
      '#00BFFF',  // Deep Sky Blue
      '#8A2BE2',  // Blue Violet
      '#FF69B4',  // Hot Pink
      '#FF1493'   // Deep Pink
    ]
  };

  function fire(particleRatio, opts) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio)
    });
  }

  fire(0.25, {
    spread: 26,
    startVelocity: 55,
  });

  fire(0.2, {
    spread: 60,
  });

  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8
  });

  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2
  });

  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  });
}; 