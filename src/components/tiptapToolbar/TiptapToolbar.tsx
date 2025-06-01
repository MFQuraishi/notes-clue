import { Editor } from '@tiptap/react';
import { IconType } from 'react-icons';
import { FaBold, FaItalic, FaStrikethrough } from 'react-icons/fa';
import { GoListUnordered } from 'react-icons/go';

type Props = {
	editor: Editor | null;
};

type ButtonComponentProps = {
	ImageComponent: IconType;
	text: string;
	onClick: () => void;
	dataActive: 'is-active' | undefined;
};

export function TipTapToolbar({ editor }: Props) {
	if (!editor) {
		return null;
	}

	return (
		<div className={'flex flex-row items-center justify-start bg-primary px-4 py-3 rounded-xl mb-4 gap-4'}>
			<ButtonComponent
				ImageComponent={FaBold}
				text={'Bold'}
				onClick={() => editor.chain().focus().toggleBold().run()}
				dataActive={editor.isActive('bold') ? 'is-active' : undefined}
			/>
			<ButtonComponent
				ImageComponent={FaItalic}
				text={'Italic'}
				onClick={() => editor.chain().focus().toggleItalic().run()}
				dataActive={editor.isActive('italic') ? 'is-active' : undefined}
			/>
			<ButtonComponent
				ImageComponent={FaStrikethrough}
				text={'Strike'}
				onClick={() => editor.chain().focus().toggleStrike().run()}
				dataActive={editor.isActive('strike') ? 'is-active' : undefined}
			/>
			<ButtonComponent
				ImageComponent={GoListUnordered}
				text={'Unordered List'}
				dataActive={editor.isActive('bulletList') ? 'is-active' : undefined}
				onClick={() => editor.commands.toggleBulletList()}
			/>
		</div>
	);
}

function ButtonComponent({ onClick, ImageComponent, text, dataActive }: ButtonComponentProps) {
	const isActive = dataActive === 'is-active';
	return (
		<button
			className={`${
				isActive ? 'brightness-150 font-semibold' : ''
			} flex flex-row border px-2.5 py-1 items-center cursor-pointer rounded-xl border-solid border-accent text-primary-text`}
			onClick={onClick}
			data-active={dataActive}
		>
			<ImageComponent className='h-4 w-4 mr-2' />
			<p className=''>{text}</p>
		</button>
	);
}
