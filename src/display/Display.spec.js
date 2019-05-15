// Test away!
import React from 'react';
import { toHaveClass } from 'jest-dom';
import { render, fireEvent, cleanup } from 'react-testing-library';
import renderer from 'react-test-renderer';
import 'react-testing-library/cleanup-after-each';

import Display from './Display';

expect.extend({ toHaveClass });

describe('Display component tests', () => {
	test('should display component', () => {
		render(<Display />);
	});

	test('displays unlocked and open by default', () => {
		const { getByText } = render(<Display />);

		getByText(/unlocked/i);
		getByText(/open/i);
	});

	test('displays Closed if props.closed is true', () => {
		const { getByText } = render(<Display closed={true} />);

		getByText(/closed/i);
	});

	test('displays Locked if props.locked is true', () => {
		const { getByText } = render(<Display locked={true} />);

		getByText(/locked/i);
	});

	test('displays red class when props.locked or props.closed are true', () => {
		const { getByText } = render(<Display locked={true} />);

		const locked = getByText(/locked/i);

		expect(locked).toHaveClass('red-led');
	});

	test('displays green class when props.unlocked or props.open is true', () => {
		const { getByText } = render(<Display locked={false} />);

		const locked = getByText(/unlocked/i);

		expect(locked).toHaveClass('green-led');
	});
});