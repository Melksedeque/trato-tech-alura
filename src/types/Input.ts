export interface Input {
  type: 'text' | 'number' | 'url' | undefined;
  name?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
