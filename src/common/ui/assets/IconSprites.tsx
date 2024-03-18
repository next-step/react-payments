const IconSprites = () => (
	<svg
		id='sprite-svgs'
		version='1.1'
		xmlns='http://www.w3.org/2000/svg'
		xmlnsXlink='http://www.w3.org/1999/xlink'
		style={{ display: "none" }}
		data-testid='icon'
	>
		<defs id='defs'>
			<symbol id='arrow-left' fill='none' viewBox='0 0 12 20'>
				<path
					fill='#000'
					d='M11.67 1.87 9.9.1 0 10l9.9 9.9 1.77-1.77L3.54 10l8.13-8.13Z'
				/>
			</symbol>
			<symbol id='setting' viewBox='0 0 24 24' fill='none'>
				<g clip-path='url(#a)'>
					<path
						fill='#000'
						d='M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.488.488 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94 0 .31.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58ZM12 15.6A3.61 3.61 0 0 1 8.4 12c0-1.98 1.62-3.6 3.6-3.6s3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6Z'
					/>
				</g>
				<defs>
					<clipPath id='a'>
						<path fill='#fff' d='M0 0h24v24H0z' />
					</clipPath>
				</defs>
			</symbol>
			<symbol id='close' viewBox='0 0 18 18' fill='none'>
				<path
					d='M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z'
					fill='black'
				/>
			</symbol>
		</defs>
	</svg>
);

export default IconSprites;
