import { render, screen } from '@testing-library/react';

import ImageNewsCard from '../ImageNewsCard';

describe('ImageNewsCard Test', () => {
  it('Contains news link', () => {
    const { getByTestId } = render(<ImageNewsCard />);
    const linkEl = getByTestId('image-news-card-link');
    expect(linkEl).toBeDefined();
  });
  it('Contains news type', () => {
    const { getByTestId } = render(<ImageNewsCard />);
    const typeEl = getByTestId('image-news-card-type');
    expect(typeEl).toBeDefined();
  });
  it('contains Image', () => {
    const { getByAltText } = render(<ImageNewsCard />);
    const imgEl = getByAltText('image-news-card-image');
    expect(imgEl).toBeInTheDocument();
  });
});
