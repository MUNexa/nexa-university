export class mentor_dialogue {
  messages: string[] = [];

  say(text: string) {
    this.messages.push(text);
    console.log("Mentor says:", text);
  }

  last() {
    return this.messages[this.messages.length - 1] || "";
  }
}
