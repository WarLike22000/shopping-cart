import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { fullProduct } from "@/interface/interface";

interface CartStore {
    items: fullProduct[];
    increase: (data: fullProduct) => void;
    decrease: (data: fullProduct) => void;
    addItem: (data: fullProduct) => void;
    removeItem: (id: string) => void;
    removeAll: () => void;
}

const useCart = create(
    persist<CartStore>((set, get) => ({
        items: [],
        addItem: (data: fullProduct) => {
            const { items } = get();
            const existingItem = items.find((item) => item._id === data._id);

            if(!existingItem) {
                set({ items: [...items, { ...data, quantity: 1 }] });
            }

        },
        increase: (data: fullProduct) => {
                set((state) => ({
                    items: state.items.map((item) =>
                    item._id === data._id ? { ...item, quantity: item.quantity! + 1 } : item
                    ),
                  }));
        },
        decrease: (data: fullProduct) => {
            set((state) => ({
                items: state.items.map((item) =>
                item._id === data._id ? { ...item, quantity: item.quantity! - 1 } : item
                ),
              }));
        },
        removeItem: (id: string) => {
            set({ items: [...get().items.filter((item) => item._id !== id)] });
        },
        removeAll: () => set({ items: [] })
    }), {
        name: "cart-storage",
        storage: createJSONStorage(() => localStorage)
    })
)

export default useCart;