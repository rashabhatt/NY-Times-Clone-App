import { FooterDesktopViewComponent } from './FooterContent/FooterDesktopContent';
import { FooterMobileViewComponent } from './FooterContent/FooterMobileContent';
import { useMediaQuery } from 'react-responsive';

const useDesktopMediaQuery = () =>
  useMediaQuery({ query: '(min-width: 1024px)' });

const useTabletAndBelowMediaQuery = () =>
  useMediaQuery({ query: '(max-width: 768px)' });

const Desktop = ({ children }: any) => {
  const isDesktop = useDesktopMediaQuery();

  return isDesktop ? children : null;
};

const TabletAndBelow = ({ children }: any) => {
  const isTabletAndBelow = useTabletAndBelowMediaQuery();

  return isTabletAndBelow ? children : null;
};

export function FooterComponent() {
  return (
    <div>
      <Desktop>
        <FooterDesktopViewComponent></FooterDesktopViewComponent>
      </Desktop>
      <TabletAndBelow>
        <FooterMobileViewComponent></FooterMobileViewComponent>
      </TabletAndBelow>
    </div>
  );
}
