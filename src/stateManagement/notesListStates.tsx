import { create } from 'zustand';
import { NotesType } from './types/notesListTypes';
import getCurrentDate from '@/utils/getCurrentDate';
import { getUUID } from '@/utils/generateUUID';
import navigate from '@/utils/navigationHelpers';
import { RedirectType } from 'next/navigation';

export const useNotesListStore = create<NotesType>((set) => ({
	notes: {},
	addNote: (content) => {
		const UUID = getUUID();
		set((state) => ({ notes: { ...state.notes, [UUID]: { _id: UUID, time: getCurrentDate(), content: content } } }));
		navigate(`/all-notes`, RedirectType.push, { noteId: UUID });
	},
	editNote: (noteId, content) => {
		set((state) => ({ notes: { ...state.notes, [noteId]: { _id: noteId, time: getCurrentDate(), content: content } } }));
	},
	deleteNote: (noteId) => {
		set((state) => {
			delete state.notes[noteId];
			return state;
		});
	},
}));
