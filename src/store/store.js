import { create } from "zustand";

const useStore = create((set) => ({
    modal: false,
    download: false,
    setDownload: (value) => set(({ download: value })),
    openModal: () => set(({ modal: true })),
    closeModal: () => set(({ modal: false })),
}))

export default useStore