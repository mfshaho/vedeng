
import { About, Explore, Feedback, GetStarted, Hero, Work, WhatsNew } from '../sections';



const Page = () => (
  <div>
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <Explore />
    </div>
    <div className="relative">
      <GetStarted />
      <div className="gradient-04 z-0" />
      <WhatsNew />
    </div>
    <div className="relative">
      <Work />
      <div className="gradient-04 z-0" />
      <Feedback />
    </div>
    
  </div>
);

export default Page;
