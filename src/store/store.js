import { create } from "zustand";

const useStore = create((set) => ({
    modal: false,
    openModal: () => set(({ modal: true })),
    closeModal: () => set(({ modal: false })),
}))

export default useStore