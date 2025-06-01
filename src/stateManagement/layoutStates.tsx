import { create } from 'zustand';
import { LayoutStateType } from './types/layoutTypes';

export const useLayoutState = create<LayoutStateType>((set) => ({
	isSidebarOpen: true,
	setIsSidebarOpen: (val) => set(() => ({ isSidebarOpen: val })),
}));
