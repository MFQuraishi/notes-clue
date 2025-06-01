import SidePanel from '@/components/sidePanel/SidePanel';
import React from 'react';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
	return (
		<main className='flex flex-row'>
			<SidePanel />
			<section>{children}</section>
		</main>
	);
}
