import { render, screen } from '@testing-library/react';

import ArticleWithTitle from '../ArticleWithTitle';

describe('NewsCard Test', () => {
  it('Contains news link', () => {
    const { getByTestId } = render(<ArticleWithTitle />);
    const linkEl = getByTestId('article-with-title-link');
    expect(linkEl).toBeDefined();
  });
  it('Contains news type', () => {
    const { getByTestId } = render(<ArticleWithTitle />);
    const typeEl = getByTestId('article-with-title-type');
    expect(typeEl).toBeDefined();
  });
  it('Contains news title', () => {
    const { getByTestId } = render(<ArticleWithTitle />);
    const titleEl = getByTestId('article-with-title-title');
    expect(titleEl).toBeDefined();
  });
  it('contains Image', () => {
    const { getByAltText } = render(<ArticleWithTitle />);
    const imgEl = getByAltText('article-with-title-image');
    expect(imgEl).toBeInTheDocument();
  });
});
