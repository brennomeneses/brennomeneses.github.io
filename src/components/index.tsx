import { PipBoyFooter } from "./PipboyFooter";
import { PipBoyHeader } from "./PipboyHeader";
import { SocialLinks } from "./SocialLinks";
import { SpecialSection } from "./SpecialSction";

const Index = () => {
  return (
    <div className="min-h-screen bg-background p-4 md:p-8 crt-container">
      <div className="max-w-7xl mx-auto">
        <PipBoyHeader />
        <SpecialSection />
        <SocialLinks />
        <PipBoyFooter />
      </div>
    </div>
  );
};

export default Index;
