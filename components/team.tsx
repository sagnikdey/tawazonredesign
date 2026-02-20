import React from 'react';
import TeamMember, { type TeamMemberProps } from './teammember';
import { Badge } from './ui/badge';
import { CircleDot } from 'lucide-react';

const team = () => {
  // Replace these with real team data + local images when available.
  // `unoptimized` is enabled in the TeamMember component so remote URLs work without Next image config.
  const featured: TeamMemberProps = {
    name: 'OUSSAMA GHANDOUR',
    title: 'Managing Director – Tawazon Chemical Company LLC',
    imageSrc: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=1200&h=1500&fit=crop',
    bio: `In my pre-Tawazon days, during the 1980's, I managed regional distribution for a multinational company. I was in quest of professional and transparent distributors in the Middle East region. Who besides fulfilling many other relevant criteria, focused on specific industries. Not being very successful, prompted me and my partner to decide on starting one of our own. Tawazon Chemical Co LLC was the result. It has been three decades since, and I hope that you our partners – suppliers, customers and service providers– are benefiting from this continued endeavor.`,
    details: 'Over the years, we have built a loyal techno-commercial and professional team who portray the Tawazon character of honesty, trustworthiness and transparency and work on paying attention to detail while meeting critical time lines. The dedicated management and staff at our centralized and satellite offices and warehouses offer services that assist customers with inventory management, arranging international imports and local stocks, hazardous cargo precautions and transportation.',
    variant: 'featured',
  };

  const members: TeamMemberProps[] = [
    {
      name: 'Pradeep B R',
      title: 'Business Manager – Coatings',
      imageSrc: featured.imageSrc,
    },
    {
      name: 'Pradeep B R',
      title: 'Business Manager – Coatings',
      imageSrc: featured.imageSrc,
    },
    {
      name: 'Pradeep B R',
      title: 'Business Manager – Coatings',
      imageSrc: featured.imageSrc,
    },
    {
      name: 'Pradeep B R',
      title: 'Business Manager – Coatings',
      imageSrc: featured.imageSrc,
    },
    {
      name: 'Pradeep B R',
      title: 'Business Manager – Coatings',
      imageSrc: featured.imageSrc,
    },
    {
      name: 'Pradeep B R',
      title: 'Business Manager – Coatings',
      imageSrc: featured.imageSrc,
    },
    {
      name: 'Pradeep B R',
      title: 'Business Manager – Coatings',
      imageSrc: featured.imageSrc,
    },
    {
      name: 'Pradeep B R',
      title: 'Business Manager – Coatings',
      imageSrc: featured.imageSrc,
    },
  ];

  return (

      <div className="mx-auto max-w-[1400px] px-6 sm:px-12 xl:px-24">
        <div className="max-w-3xl">
            <Badge variant="outline" className='mb-8'>
                        <CircleDot data-icon="CircleDot" className='text-green-500'/>
                        Team Tawazon
                    </Badge>
          <h2>
            Meet the team
          </h2>
          <p className="mt-4 text-base">
          The Senior Management Team
          </p>
        </div>

        <div className="mt-10">
          <TeamMember {...featured} />
          {/* Main body starts below the floated image */}
         
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((m, idx) => (
            <TeamMember key={`${m.name}-${idx}`} {...m} />
          ))}
        </div>
      </div>
   
  );
};

export default team;
