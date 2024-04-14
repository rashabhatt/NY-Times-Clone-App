import { render, screen } from '@testing-library/react';

import AbstractNewsCard from '../AbstractNewsCard';

describe('ArticleWithAbstract Test', () => {
  it('Contains news link', () => {
    const { getByTestId } = render(<AbstractNewsCard />);
    const linkEl = getByTestId('abstract-news-card-link');
    expect(linkEl).toBeDefined();
  });
  it('Contains news title', () => {
    const { getByTestId } = render(<AbstractNewsCard />);
    const titleEl = getByTestId('abstract-news-card-title');
    expect(titleEl).toBeDefined();
  });
  it('Contains news type', () => {
    const { getByTestId } = render(<AbstractNewsCard />);
    const typeEl = getByTestId('abstract-news-card-type');
    expect(typeEl).toBeDefined();
  });
  it('Contains news abstract', () => {
    const { getByTestId } = render(<AbstractNewsCard />);
    const typeEl = getByTestId('abstract-news-card-abstract');
    expect(typeEl).toBeDefined();
  });
  it('contains Image', () => {
    const { getByAltText } = render(<AbstractNewsCard />);
    const imgEl = getByAltText('abstract-news-card-image');
    expect(imgEl).toBeInTheDocument();
  });
});
