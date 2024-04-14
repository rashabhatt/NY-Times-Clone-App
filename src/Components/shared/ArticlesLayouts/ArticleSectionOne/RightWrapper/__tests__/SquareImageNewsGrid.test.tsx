import { render, screen } from '@testing-library/react';

import SquareImageNewsGrid from '../SquareImageNewsGrid';

describe('SquareImageNewsGrid Test', () => {
  it('Contains news link', () => {
    const { getByTestId } = render(<SquareImageNewsGrid />);
    const linkEl = getByTestId('square-news-image-grid-link');
    expect(linkEl).toBeDefined();
  });
  it('Contains news type', () => {
    const { getByTestId } = render(<SquareImageNewsGrid />);
    const bylineEl = getByTestId('square-news-image-grid-type');
    expect(bylineEl).toBeDefined();
  });
  it('Contains news title', () => {
    const { getByTestId } = render(<SquareImageNewsGrid />);
    const titleEl = getByTestId('square-news-image-grid-title');
    expect(titleEl).toBeDefined();
  });
  it('contains Image', () => {
    const { getByAltText } = render(<SquareImageNewsGrid />);
    const imgEl = getByAltText('square-news-image-grid-image');
    expect(imgEl).toBeInTheDocument();
  });
});
