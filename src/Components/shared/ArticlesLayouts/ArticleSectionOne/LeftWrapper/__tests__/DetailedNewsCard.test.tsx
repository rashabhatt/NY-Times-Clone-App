import { describe, expect } from '@jest/globals';
import { render, screen } from '@testing-library/react';

import DetailedNewsCard from '../DetailedNewsCard';

describe('DetailedNewsCard Test', () => {
  it('Image contain alt text', () => {
    render(<DetailedNewsCard />);
    const imageAlt = screen.getByAltText('detailed-news-card-image');
    expect(imageAlt).toBeDefined();
  });
  it('News contain tite', () => {
    const { getByTestId } = render(<DetailedNewsCard />);
    const titleEl = getByTestId('detailed-news-card-title');
    expect(titleEl).toBeDefined();
  });
  it('News contain abstract', () => {
    const { getByTestId } = render(<DetailedNewsCard />);
    const abstractEl = getByTestId('detailed-news-card-abstract');
    expect(abstractEl).toBeDefined();
  });
  it('News contain News Type', () => {
    const { getByTestId } = render(<DetailedNewsCard />);
    const typeEl = getByTestId('detailed-news-card-type');
    expect(typeEl).toBeDefined();
  });
  it('Image should be present', () => {
    const { getByAltText } = render(<DetailedNewsCard />);
    const imgEl = getByAltText('detailed-news-card-image');
    expect(imgEl).toBeDefined();
  });
});
