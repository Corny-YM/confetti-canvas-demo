import confetti from "canvas-confetti";
import { useCallback, useRef } from "react";

import { Button } from "@/components/ui/button";
import BasicCannon from "@/components/BasicCannon";
import RealisticLook from "@/components/RealisticLook";
import RandomDirection from "@/components/RandomDirection";
import Fireworks from "@/components/Fireworks";
import Stars from "@/components/Stars";
import Snow from "@/components/Snow";
import SchoolPride from "@/components/SchoolPride";
import Emoji from "@/components/Emoji";
import DevButton from "@/components/DevButton";
import Github from "./components/icon/Github";

function App() {
  const refConfetti = useRef<any>(null);

  const handleClick = useCallback(() => {
    let canvas = document.getElementById("corn-vas") as any;
    if (!canvas) return;
    // you should  only initialize a canvas once, so save this function
    // we'll save it to the canvas itself for the purpose of this demo
    canvas.confetti =
      canvas.confetti || confetti.create(canvas, { resize: true });

    canvas.confetti({ spread: 70, origin: { y: 1.2 } });
  }, []);

  return (
    <div className="relative bg-slate-900/80 w-full h-full flex flex-col justify-center items-center">
      <div className="absolute right-2 top-2">
        <Button className="rounded-full" asChild>
          <a
            href="https://github.com/Corny-YM/confetti-canvas-demo"
            target="_blank"
          >
            <Github />
          </a>
        </Button>
      </div>
      <div className="grid grid-cols-3 gap-2">
        <div className="col-span-3">
          <DevButton />
        </div>
        <BasicCannon />
        <RandomDirection />
        <RealisticLook />
        <Fireworks />
        <Stars />
        <Snow />
        <SchoolPride />
        <Emoji />
        <Button onClick={handleClick}>Custom Canvas</Button>
        <div className="relative col-span-3 bg-primary rounded-md">
          <div className="absolute left-1 top-1 text-neutral-200 text-sm">
            <i>Custom canvas</i>
          </div>
          <canvas ref={refConfetti} id="corn-vas" className="w-full"></canvas>
        </div>
      </div>
    </div>
  );
}

export default App;
