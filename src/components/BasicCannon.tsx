import confetti from "canvas-confetti";

import { Button } from "@/components/ui/button";

const BasicCannon = () => {
  const handleClick = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
  };

  return <Button onClick={handleClick}>Basic Cannon</Button>;
};

export default BasicCannon;
