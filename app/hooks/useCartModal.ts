import { create } from "zustand";

interface UseCartModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

export const useCartModal = create<UseCartModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
}));