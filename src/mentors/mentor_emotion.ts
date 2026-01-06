export type emotion = "happy" | "sad" | "neutral" | "angry" | "excited";

export class mentor_emotion {
  private current: emotion = "neutral";

  set(emotion: emotion) {
    this.current = emotion;
  }

  get() {
    return this.current;
  }
}