import confetti from "canvas-confetti";

import { Button } from "@/components/ui/button";

const SchoolPride = () => {
  // go Buckeyes!
  const colors = ["#bb0000", "#ffffff"];

  const frame = (end: number) => {
    confetti({
      particleCount: 2,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: colors,
    });
    confetti({
      particleCount: 2,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: colors,
    });
    if (Date.now() < end) requestAnimationFrame(() => frame(end));
  };

  const handleClick = () => {
    const end = Date.now() + 5 * 1000;
    frame(end);
  };

  return <Button onClick={handleClick}>SchoolPride</Button>;
};

export default SchoolPride;
