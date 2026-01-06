import { event_bus } from "../core/event_bus";

export abstract class mentor_base {
  name: string;
  personality: string;
  visible: boolean = true;

  constructor(name: string, personality: string) {
    this.name = name;
    this.personality = personality;
  }

  abstract greet(): void;
  abstract teach(topic: string): void;

  hide() {
    this.visible = false;
    event_bus.emit("mentor_visibility_change", { mentor: this.name, visible: false });
  }

  show() {
    this.visible = true;
    event_bus.emit("mentor_visibility_change", { mentor: this.name, visible: true });
  }
}
