'use client';

import Document from '@tiptap/extension-document';
import Placeholder from '@tiptap/extension-placeholder';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import './styles.css';
import { TipTapToolbar } from '../tiptapToolbar/TiptapToolbar';
import handleEditorEdits from '@/utils/handleEditorEdits';
import { getUUID } from '@/utils/generateUUID';
import { useEffect } from 'react';
import navigate from '@/utils/navigationHelpers';
import NAVIGATION_PATHS from '@/constants/paths';

const CustomDocument = Document.extend({
	content: 'heading paragraph+ block*',
});

type Props = {
	noteId?: string;
};

const TiptapEditor = ({ noteId }: Props) => {
	const noteIdFromParent = noteId || getUUID();

	useEffect(() => {
		if (!noteId) {
			navigate(NAVIGATION_PATHS.allNotesPage, { pathsArray: [noteIdFromParent] });
		}
	}, [noteId, noteIdFromParent]);

	const editor = useEditor({
		onUpdate: ({ editor }) => {
			handleEditorEdits(editor.getJSON(), noteIdFromParent);
		},
		extensions: [
			CustomDocument,
			StarterKit.configure({
				document: false,
			}),
			Placeholder.configure({
				showOnlyCurrent: false,
				placeholder: ({ node }) => {
					if (node.type.name === 'heading') {
						return 'Start with a title…';
					}

					return 'Add details or thoughts…';
				},
			}),
		],
		editorProps: {
			attributes: {
				class: 'text-primary-text outline-0',
			},
		},
	});

	return (
		<div className='p-4'>
			<TipTapToolbar editor={editor} />
			<EditorContent editor={editor} />
		</div>
	);
};

export default TiptapEditor;
