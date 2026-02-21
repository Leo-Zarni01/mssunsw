// src/hooks/useSupabaseGallery.ts
import { useEffect, useState } from "react";
import { supabase } from "../supabase-client";
import type { FileObject } from "@supabase/storage-js";

// interface for supabase
interface UseSupabaseGalleryOptions {
  bucket: string;
  folder?: string;
  limit?: number;
  offset?: number;
}

// function for supabase
export function useSupabaseGallery({
  bucket,
  folder,
  limit = 100,
  offset,
}: UseSupabaseGalleryOptions) {
  const [images, setImages] = useState<FileObject[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!folder) return;

    let isMounted = true;

    async function fetchImages() {
      setLoading(true);

      const { data, error } = await supabase.storage
        .from(bucket)
        .list(`${folder}/`, {
          limit,
          offset,
          sortBy: { column: "name", order: "asc" },
        });

      if (!isMounted) return;

      if (error) {
        setError(error.message);
        setImages([]);
      } else {
        setImages(data ?? []);
      }

      setLoading(false);
    }

    fetchImages();

    return () => {
      isMounted = false;
    };
  }, [bucket, folder, limit]);




  return { images, loading, error };
}
