export function generate_id(prefix = "id") {
  return `${prefix}_${Math.random().toString(36).slice(2)}`;
}
