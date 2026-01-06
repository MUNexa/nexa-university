import { mentor_base } from "../mentor_base";
import { wallix_behavior } from "./wallix_behavior";
import { wallix_visuals } from "./wallix_visuals";
import { wallix_dialogue } from "./wallix_dialogue";

export class wallix extends mentor_base {
  behavior: wallix_behavior;
  visuals: wallix_visuals;
  dialogue: wallix_dialogue;

  constructor() {
    super("wallix", "funny, emotional, happy by default");
    this.behavior = new wallix_behavior();
    this.visuals = new wallix_visuals();
    this.dialogue = new wallix_dialogue();
  }

  greet() {
    this.dialogue.say("Hello! I am WALLIX, your coding mentor.");
  }

  teach(topic: string) {
    this.dialogue.say(`Let's explore ${topic} together!`);
  }
}

