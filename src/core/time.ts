export class time {
  static delta = 0;
  static elapsed = 0;
  private static last = 0;

  static init() {
    this.last = performance.now();
  }

  static update() {
    const now = performance.now();
    this.delta = (now - this.last) / 1000;
    this.elapsed += this.delta;
    this.last = now;
  }
}