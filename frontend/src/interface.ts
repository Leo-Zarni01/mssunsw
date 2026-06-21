export type Event = {
  id: number;
  name: string;
  date: string;
  time: string | null;
  location: string | null;
  cover_image: string | null;
  description: string | null;
  images_path: string | null;
  image_folder_name: string | null;
  past: boolean;
};