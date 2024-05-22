import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateCurrentUser } from "../../services/apiAuth";

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { mutate: updateUser, isLoading: isUpdating } = useMutation({
    mutationFn: updateCurrentUser,
    onSuccess: () => {
      toast.success("User account successfully updated.");
      setTimeout(() => {
        queryClient.invalidateQueries({ queryKey: ["user"] });
      }, 100);
    },
    onError: (err) => toast.err(err.message),
  });

  return { updateUser, isUpdating };
}
