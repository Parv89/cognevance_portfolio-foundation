export const fadeUp = (delay = 0, duration = 0.6) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration,
      delay,
      ease: [0.215, 0.61, 0.355, 1.0], // cubic bezier for natural deceleration
    },
  },
});

export const fadeDown = (delay = 0, duration = 0.5) => ({
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration,
      delay,
      ease: [0.215, 0.61, 0.355, 1.0],
    },
  },
});

export const fadeLeft = (delay = 0, duration = 0.6) => ({
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration,
      delay,
      ease: [0.215, 0.61, 0.355, 1.0],
    },
  },
});

export const fadeRight = (delay = 0, duration = 0.6) => ({
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration,
      delay,
      ease: [0.215, 0.61, 0.355, 1.0],
    },
  },
});

export const scaleIn = (delay = 0, duration = 0.5) => ({
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration,
      delay,
      ease: [0.175, 0.885, 0.32, 1.275], // slight spring back
    },
  },
});

export const staggerContainer = (staggerChildren = 0.1, delayChildren = 0.1) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.215, 0.61, 0.355, 1.0],
    },
  },
};

export const floatingAnimation = (duration = 5, yOffset = 12) => ({
  animate: {
    y: [-yOffset / 2, yOffset / 2, -yOffset / 2],
    transition: {
      duration,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
});
