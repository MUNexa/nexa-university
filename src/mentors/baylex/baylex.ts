import { mentor_base } from "../mentor_base";
import { baylex_dialogue } from "./baylex_dialogue";

export class baylex extends mentor_base {
  dialogue: baylex_dialogue;

  constructor() {
    super("baylex", "neutral, logical, no emotions");
    this.dialogue = new baylex_dialogue();
  }

  greet() {
    this.dialogue.say("Hello. I am your mentor companion. Rate your learning level 1-10.");
  }

  teach(topic: string) {
    this.dialogue.say(`We will study ${topic} with precision and logic.`);
  }
}
