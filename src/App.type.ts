export type Item = {
  id: string;
  description?: string | null;
  urls: {
    small: string;
    regular?: string;  
  };
};