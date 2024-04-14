import { render, screen } from '@testing-library/react';

import BriefNewsGrid from '../BriefNewsGrid';

describe('BriefNewsGrid Test', () => {
  it('Contains news link', () => {
    const { getByTestId } = render(<BriefNewsGrid />);
    const linkEl = getByTestId('brief-news-grid-link');
    expect(linkEl).toBeDefined();
  });
  it('Contains news title', () => {
    const { getByTestId } = render(<BriefNewsGrid />);
    const titleEl = getByTestId('brief-news-grid-title');
    expect(titleEl).toBeDefined();
  });
  it('Contains news type', () => {
    const { getByTestId } = render(<BriefNewsGrid />);
    const typeEl = getByTestId('brief-news-grid-type');
    expect(typeEl).toBeDefined();
  });
  it('contains Image', () => {
    const { getByAltText } = render(<BriefNewsGrid />);
    const imgEl = getByAltText('brief-news-grid-image');
    expect(imgEl).toBeDefined();
  });
});
