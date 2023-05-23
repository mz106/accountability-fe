import ErrorBoundary from "../errorBoundary/ErrorBoundary";
import ErrorFallback from "../errorBoundary/ErrorFallback";

import Header from "../header/Header";
import Footer from "../footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <ErrorBoundary fallback={<ErrorFallback />}>
        <Header />
        <ErrorBoundary fallback={<ErrorFallback />}>
          <main>{children}</main>
        </ErrorBoundary>
        <Footer />
      </ErrorBoundary>
    </>
  );
};

export default Layout;
