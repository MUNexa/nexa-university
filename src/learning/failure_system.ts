
import { event_bus } from "../core/event_bus";

export class failure_system {
  private static failures = new Map<string, number>();

  static record(lesson_id: string) {
    const count = (this.failures.get(lesson_id) || 0) + 1;
    this.failures.set(lesson_id, count);

    event_bus.emit("lesson_failed", {
      lesson_id,
      attempts: count
    });
  }

  static get_attempts(lesson_id: string) {
    return this.failures.get(lesson_id) || 0;
  }
}