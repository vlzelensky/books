export interface BookProps {
  id: number;
  author: string;
  name: string;
  image: string;
  isTaken: boolean;
  endDate: Date | null;
}
