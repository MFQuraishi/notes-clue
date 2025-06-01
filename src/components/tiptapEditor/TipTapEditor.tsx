'use client';

import Document from '@tiptap/extension-document';
import Placeholder from '@tiptap/extension-placeholder';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import './styles.css';
import { TipTapToolbar } from '../tiptapToolbar/TiptapToolbar';

const CustomDocument = Document.extend({
	content: 'heading paragraph+ block*',
});

const TiptapEditor = () => {
	const editor = useEditor({
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
