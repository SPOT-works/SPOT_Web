import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createMessage, createCapsule, readHistory } from "./api";
import QUERY_KEY from "@/constants/queryKey";

export const useCreateMessageMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createMessage,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.history.NEARBY] });
    },
  });
};

export const useCreateCapsuleMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createCapsule,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.history.NEARBY] });
    },
  });
};

export const useReadHistoryMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: readHistory,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.history.NEARBY] });
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.history.FOUND] });
    },
  });
};
