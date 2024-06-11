import confetti from "canvas-confetti";

import { randomInRange } from "@/utils";
import { Button } from "@/components/ui/button";

const RandomDirection = () => {
  const handleClick = () => {
    confetti({
      angle: randomInRange(55, 125),
      spread: randomInRange(50, 70),
      particleCount: randomInRange(50, 100),
      origin: { y: 0.6 },
    });
  };

  return <Button onClick={handleClick}>Random Direction</Button>;
};

export default RandomDirection;
