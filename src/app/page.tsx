import RedirectionCta from './routeCompopnents/RedirectionCta';

export default function NotesLandingPage() {
	return (
		<div className='w-screen h-screen flex items-center justify-center'>
			<div className='min-w-5/6'>
				<h1 className='text-primary-text text-6xl font-semibold animate-fade-up mb-4'>Hello There</h1>
				<p className='text-primary-text text-3xl animate-fade-up mb-6'>Click below to enter the notes clue app</p>
				<RedirectionCta />
			</div>
		</div>
	);
}
