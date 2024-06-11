import confetti from "canvas-confetti";

import { Button } from "@/components/ui/button";

const RealisticLook = () => {
  const fire = (particleRatio: number, opts: confetti.Options) => {
    confetti({
      origin: { y: 0.7 },
      ...opts,
      particleCount: Math.floor(200 * particleRatio),
    });
  };

  const handleClick = () => {
    // mixing a few effects together
    fire(0.25, { spread: 26, startVelocity: 55 });
    fire(0.2, { spread: 60 });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
    fire(0.1, { spread: 120, startVelocity: 45 });
  };

  return <Button onClick={handleClick}>Realistic Look</Button>;
};

export default RealisticLook;
