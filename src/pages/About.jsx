import { AboutHero } from '../components/About/HeroSection';
import { MissionSection } from '../components/About/MissionSection';
import { TeamSection } from '../components/About/TeamSection';
import { ValuesSection } from '../components/About/ValuesSection';
import { AboutCTASection } from '../components/About/CTASection';

export default function About() {
    return (
        <div className="min-h-screen">
            <AboutHero />
            <MissionSection />
            <TeamSection />
            <ValuesSection />
            <AboutCTASection />
        </div>
    );
}