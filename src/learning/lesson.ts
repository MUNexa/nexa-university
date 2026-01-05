export interface lesson {
  id: string;
  title: string;
  description: string;
  validate(result: any): boolean;
}
