import { IconType } from 'react-icons';

type PrimaryButtonProps = {
	ImageComponent?: IconType;
	text?: string;
	onClick: () => void;
	isActive?: boolean;
	customImageClass?: string;
	customContainerClass?: string;
};

export default function PrimaryButton({ ImageComponent, customContainerClass, text, onClick, isActive, customImageClass }: PrimaryButtonProps) {
	return (
		<button
			className={`${isActive ? 'brightness-150 font-semibold' : ''} hover:bg-secondary flex flex-row border ${
				text ? 'px-2.5 py-1' : 'p-2'
			} items-center cursor-pointer rounded-xl border-solid border-accent text-primary-text ${customContainerClass || ''}`}
			onClick={onClick}
		>
			{ImageComponent && <ImageComponent className={`h-4 w-4 ${customImageClass || ''} ${text ? 'mr-2' : ''}`} />}
			{text && <p className=''>{text}</p>}
		</button>
	);
}
