import React from 'react';
import { render, screen } from '@testing-library/react';
import ButtonLink from '@/components/ButtonLink';
import '@testing-library/jest-dom';

describe('ButtonLink component', () => {
  it('renders button with link and title', () => {
    const title = 'Example Button';
    const link = 'https://example.com';
    render(<ButtonLink link={link} title={title} />);
    const buttonLinkElement = screen.getByRole('button');
    const anchorElement = screen.getByRole('link');

    expect(buttonLinkElement).toBeInTheDocument();
    expect(buttonLinkElement).toHaveTextContent(title);
    expect(anchorElement).toHaveAttribute('href', link);
  });
});
