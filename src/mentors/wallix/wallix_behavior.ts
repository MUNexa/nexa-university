
export class wallix_behavior {
  sad_count = 0;

  react_to_failure(failures: number) {
    if (failures >= 5) {
      this.sad_count++;
      console.log("WALLIX looks sad...");
    }
  }
}