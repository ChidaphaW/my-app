import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const COUNTER = "counter";

export const useGetCount = () => {
  return useQuery([COUNTER], async () => {
    return 0;
  });
};

export const useUpdateCount = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async (count: number) => {
      queryClient.setQueryData([COUNTER], count);
    },
    {
      onSuccess: () => {
        console.log("=== onSuccess in Service ===");
      },
      onError: () => {
        console.log("=== error ===");
      },
    }
  );
};

export const useResetCount = () => {
  const queryClient = useQueryClient();
  return useMutation(
    async () => {
      queryClient.invalidateQueries([COUNTER]);
    },
    {
      onSuccess: () => {
        console.log("=== clear ===");
      },
    }
  );
};