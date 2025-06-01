import { JSONContent } from '@tiptap/react';

export type NotesType = {
	notes: Record<NoteIdType, ListType>; // key will be the ID of each note
	addNote: (content: JSONContent) => void;
	editNote: (noteId: NoteIdType, content: JSONContent) => void;
	deleteNote: (noteId: NoteIdType) => void;
};

type ListType = {
	_id: NoteIdType;
	time: string;
	content: JSONContent;
};

export type NoteIdType = string;
