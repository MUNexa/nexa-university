export class learning_points {
  private static points = 0;

  static add(value: number) {
    this.points += value;
  }

  static get() {
    return this.points;
  }
}
