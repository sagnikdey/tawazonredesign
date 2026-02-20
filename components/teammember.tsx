import React from 'react';
import Image from 'next/image';

export type TeamMemberVariant = 'grid' | 'featured';

export interface TeamMemberProps {
  name: string;
  title: string;
  imageSrc: string;
  /** Optional short text used in the featured layout */
  bio?: string;
  details?: string;
  variant?: TeamMemberVariant;
}

const TeamMember = ({ name, title, imageSrc, bio, details, variant = 'grid' }: TeamMemberProps) => {
  if (variant === 'featured') {
    return (
      <div className="overflow-hidden">
        {/* Image floats left so text wraps around it */}
        <div className="float-left mr-6 mb-4 w-full max-w-[280px] sm:max-w-[320px]">
          <div className="relative glass-card-textured p-4">
            <div className="relative aspect-4/5 w-full rounded-sm overflow-hidden">
              <Image
                src={imageSrc}
                alt={name}
                fill
                unoptimized
                sizes="(min-width: 640px) 320px, 280px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>

        <div>
          <div className="text-lg font-semibold">
            {name}
          </div>
          <div className="mt-1 text-base">
            {title}
          </div>
        </div>

        {bio ? (
          <p className="mt-4 text-muted-foreground">
            {bio}
          </p>
        ) : null}
        {details ? (
          <p className="mt-4 text-muted-foreground">
            {details}
          </p>
        ) : null}
      </div>
    );
  }

  return (
    <article className="group overflow-hidden backdrop-blur-2xl bg-white/10 dark:bg-zinc-900/10 border dark:border-zinc-800/50 rounded-sm p-2">
      <div className="relative aspect-4/3 w-full overflow-hidden bg-black/20">
        <Image
          src={imageSrc}
          alt={name}
          fill
          unoptimized
          sizes="(min-width: 1024px) 280px, (min-width: 768px) 45vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03] rounded-sm"
        />
      </div>

      <div className="p-5">
        <div className="text-base font-semibold">
          {name}
        </div>
        <div className="mt-1 text-sm text-muted-foreground">
          {title}
        </div>
      </div>
    </article>
  );
};

export default TeamMember;
