
export class mentor_movement {
  position = { x: 0, y: 0, z: 0 };

  move_to(x: number, y: number, z: number) {
    this.position = { x, y, z };
  }

  teleport(x: number, y: number, z: number) {
    this.position = { x, y, z };
  }
}