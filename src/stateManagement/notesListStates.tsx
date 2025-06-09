import { create } from 'zustand';
import { NotesType } from './types/notesListTypes';
import getCurrentDate from '@/utils/getCurrentDate';
import { getUUID } from '@/utils/generateUUID';
import navigate from '@/utils/navigationHelpers';
import { persist, createJSONStorage } from 'zustand/middleware';
import NAVIGATION_PATHS from '@/constants/paths';
import cloneDeep from 'lodash/cloneDeep';

export const useNotesListStore = create<NotesType>()(
	persist(
		(set, get) => ({
			notes: {},
			addNote: (content) => {
				const UUID = getUUID();
				set((state) => ({ notes: { ...state.notes, [UUID]: { _id: UUID, time: getCurrentDate(), content: content } } }));
				navigate(NAVIGATION_PATHS.allNotesPage, { pathsArray: [UUID] });
			},
			editNote: (noteId, content) => {
				set((state) => ({ notes: { ...state.notes, [noteId]: { _id: noteId, time: getCurrentDate(), content: content } } }));
			},
			deleteNote: (noteId) => {
				set((state) => {
					delete state.notes[noteId];
					return cloneDeep(state);
				});
				const newNoteToNavigate = Object.values(get().notes)?.[0]?._id;
				navigate(NAVIGATION_PATHS.allNotesPage, { pathsArray: newNoteToNavigate ? [newNoteToNavigate] : [] });
			},
		}),
		{
			name: 'notes-list-store',
			storage: createJSONStorage(() => localStorage),
		}
	)
);
