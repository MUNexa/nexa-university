import { curriculum } from "./curriculum";
import { failure_system } from "./failure_system";
import { learning_points } from "./learning_points";
import { hint_system } from "./hint_system";
import { lesson } from "./lesson";

export class learning_manager {
  private curriculum: curriculum;

  constructor(curriculum: curriculum) {
    this.curriculum = curriculum;
  }

  submit(result: any) {
    const current = this.curriculum.current();
    if (!current) return;

    const success = current.validate(result);

    if (success) {
      learning_points.add(10);
      this.curriculum.advance();
    } else {
      failure_system.record(current.id);
      return hint_system.get_hint(current.id);
    }
  }
}
