import p5 from "p5";
import { resizer } from "./util/resize/resize";

const sketch = (p: p5) => {
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight)

    resizer.p5(p)
  }

  p.draw = () => {
    p.background(220)
    p.ellipse(p.width / 2, p.height / 2, 30)
  }
}

new p5(sketch)