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
    bio: `In the 1980s, while managing regional distribution for a multinational, I struggled to find professional, transparent distributors in the Middle East who were truly focused on specific industries. This gap led my partner and me to establish Tawazon Chemical Co. LLC. More than three decades later, I hope our partners – suppliers, customers, and service providers – continue to benefit from that decision.`,
    details: 'Over the years, we have built a loyal techno-commercial team that reflects Tawazon’s character of honesty, trustworthiness, and transparency. From our centralized and satellite offices and warehouses, they support customers with careful inventory management, international imports and local stocks, and the safe handling and transportation of hazardous cargo.',
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
