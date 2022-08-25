export interface BookI {
  id: number;
  author: string;
  name: string;
  description: string;
  image: string;
  isTaken: boolean;
  endDate: Date | null;
}
