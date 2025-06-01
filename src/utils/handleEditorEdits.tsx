import { useNotesListStore } from '@/stateManagement/notesListStates';
import { NoteIdType } from '@/stateManagement/types/notesListTypes';
import { JSONContent } from '@tiptap/react';

export default function handleEditorEdits(json: JSONContent, noteId?: NoteIdType) {
	const { addNote, editNote } = useNotesListStore.getState();

	if (noteId) {
		editNote(noteId, json);
	} else {
		addNote(json);
	}
}
