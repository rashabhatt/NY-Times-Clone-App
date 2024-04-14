import { render, screen } from '@testing-library/react';

import CircularImageNewsGrid from '../CircularImageNewsGrid';

describe('CircularImageNewsGrid Test', () => {
  it('Contains news link', () => {
    const { getByTestId } = render(<CircularImageNewsGrid />);
    const linkEl = getByTestId('circular-news-image-grid-link');
    expect(linkEl).toBeDefined();
  });
  it('Contains news byline', () => {
    const { getByTestId } = render(<CircularImageNewsGrid />);
    const bylineEl = getByTestId('circular-news-image-grid-byline');
    expect(bylineEl).toBeDefined();
  });
  it('Contains news title', () => {
    const { getByTestId } = render(<CircularImageNewsGrid />);
    const titleEl = getByTestId('circular-news-image-grid-title');
    expect(titleEl).toBeDefined();
  });
  it('contains Image', () => {
    const { getByAltText } = render(<CircularImageNewsGrid />);
    const imgEl = getByAltText('circular-news-image-grid-image');
    expect(imgEl).toBeInTheDocument();
  });
});
