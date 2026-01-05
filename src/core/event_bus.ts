type callback = (payload?: any) => void;

export class event_bus {
  private static events = new Map<string, callback[]>();

  static on(event: string, cb: callback) {
    if (!this.events.has(event)) this.events.set(event, []);
    this.events.get(event)!.push(cb);
  }

  static emit(event: string, payload?: any) {
    const listeners = this.events.get(event);
    if (!listeners) return;
    listeners.forEach(cb => cb(payload));
  }
}
