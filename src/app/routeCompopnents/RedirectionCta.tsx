'use client';
import NAVIGATION_PATHS from '@/constants/paths';
import navigate from '@/utils/navigationHelpers';
import { FaChevronRight } from 'react-icons/fa';

export default function RedirectionCta() {
	return (
		<div className='bg-primary-2 rounded-2xl animate-fade-up inline-block active:brightness-110'>
			<div onClick={() => navigate(NAVIGATION_PATHS.allNotesPage)} className='flex flex-row items-center px-4 py-2 cursor-pointer'>
				<p className='mr-4 font-medium text-2xl mb-1.5 text-primary-text'>Enter the notes app</p>
				<FaChevronRight className='text-primary-text' />
			</div>
		</div>
	);
}
