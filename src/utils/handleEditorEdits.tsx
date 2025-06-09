import { useNotesListStore } from '@/stateManagement/notesListStates';
import { NoteIdType } from '@/stateManagement/types/notesListTypes';
import { JSONContent } from '@tiptap/react';
import { getUUID } from './generateUUID';

export default function handleEditorEdits(json: JSONContent, noteId?: NoteIdType) {
	const { editNote } = useNotesListStore.getState();

	if (noteId) {
		editNote(noteId, json);
	} else {
		editNote(getUUID(), json);
	}
}
