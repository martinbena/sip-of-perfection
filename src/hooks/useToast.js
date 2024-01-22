import toast from "react-hot-toast";

export function useToast(type, message) {
  type === "success" &&
    toast.success(message, {
      duration: 4000,
      position: "bottom-center",
      style: {
        backgroundColor: "#dcfce7",
        color: "#15803d",
      },
    });

  type === "error" &&
    toast.success(message, {
      duration: 4000,
      position: "bottom-center",
      style: {
        backgroundColor: "#fee2e2",
        color: "#b91c1c",
      },
    });
}
