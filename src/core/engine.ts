
import { event_bus } from "./event_bus";
import { time } from "./time";

export class engine {
  private running = false;

  start() {
    if (this.running) return;
    this.running = true;
    time.init();
    this.loop();
  }

  private loop = () => {
    if (!this.running) return;

    time.update();
    event_bus.emit("engine_tick", {
      delta: time.delta,
      elapsed: time.elapsed
    });

    requestAnimationFrame(this.loop);
  };
}