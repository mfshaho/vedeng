import '../styles/globals.css';
import { Footer, Navbar } from '../components';

const RootLayout = ({ children }) => (
  <html lang="en">
    <head>
    </head>
    <body>
    <div className="bg-primary-black overflow-hidden">
      <Navbar />
        {children}
      <Footer />
    </div>
    </body>
  </html>
);

export default RootLayout;
