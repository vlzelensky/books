export interface InputProps {
  value: string;
  onChange: (value: string) => void;
  type: 'text' | 'date';
  placeholder?: string;
}
