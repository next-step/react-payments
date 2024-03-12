import '@testing-library/jest-dom';

jest.mock('nanoid', () => ({
	nanoid: () => Date.now().toString(),
}));
