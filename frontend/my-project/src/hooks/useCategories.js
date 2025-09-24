import { getCategoryApi } from "@/services/categoryServie";
import { useQuery } from "@tanstack/react-query";

export const useCategories = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategoryApi,
  });

  const { categories: rawCategories = [] } = data || {};

  const categories = rawCategories.map((item) => ({
    label: item.title,
    value: item._id,
  }));

  const transformedCategories = rawCategories.map((item) => ({
    label: item.title,
    value: item.englighTitle,
  }));

  return { isLoading, categories, transformedCategories };
};
