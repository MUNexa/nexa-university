import { failure_system } from "./failure_system";

export class hint_system {
  static get_hint(lesson_id: string): string | null {
    const attempts = failure_system.get_attempts(lesson_id);

    if (attempts < 2) return null;
    if (attempts < 4) return "Try breaking the problem into smaller steps.";
    if (attempts < 6) return "Focus on the core concept instead of syntax.";

    return "Rebuild the solution from zero. You are close.";
  }
}
