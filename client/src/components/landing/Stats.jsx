import { CountUp } from "../ui/CountUp.jsx";
import { ScrollReveal } from "../ui/ScrollReveal.jsx";
import { PageContainer } from "../layout/PageContainer.jsx";
import { statsContent } from "../../data/landingContent.js";

export const Stats = () => {
  return (
    <section className='py-16 bg-gradient-to-r from-green-500 to-purple-500'>
      <PageContainer>
        <ScrollReveal>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
            {statsContent.stats.map((stat, index) => (
              <div key={index} className='text-center'>
                <div className='text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2'>
                  <CountUp
                    end={parseInt(stat.value.replace(/\D/g, ""), 10)}
                    duration={2.5}
                    suffix={stat.suffix}
                  />
                </div>
                <div className='text-white/80 text-sm md:text-base'>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </PageContainer>
    </section>
  );
};
