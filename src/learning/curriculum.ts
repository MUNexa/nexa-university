import { lesson } from "./lesson";

export class curriculum {
  private lessons: lesson[] = [];
  private index = 0;

  add_lesson(lesson: lesson) {
    this.lessons.push(lesson);
  }

  current(): lesson | null {
    return this.lessons[this.index] || null;
  }

  advance() {
    if (this.index < this.lessons.length - 1) {
      this.index++;
    }
  }
}
