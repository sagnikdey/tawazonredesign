import React from 'react';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { CircleDot, Star } from 'lucide-react';
import { Icon } from '@iconify/react';
import { testimonials } from '@/services/testimonials';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import Link from "next/link";

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-muteddark">
      <div className="sm:px-12 xl:px-24 max-w-[1400px] mr-auto ml-auto pr-6 pl-6">
        <div className="mb-8 md:flex md:items-end md:justify-between">
          <div className="max-w-xl mt-6 md:mt-0">
            <Badge variant="outline">
              <CircleDot data-icon="CircleDot" className="text-brand-accent" />
              What Our Partners Say
            </Badge>
            <h2 className="pt-8">Trusted by industry leaders worldwide.</h2>
            <p className="mt-4 text-muted-foreground">
              Hear from our customers and partners about their experience working with Tawazon Chemicals.
            </p>
          </div>
        
        <div className="mt-6 md:mt-0">
                    <Button variant="default" asChild>
                        <Link href="/testimonials">
                            View all testimonials
                            <Icon icon="solar:arrow-right-linear" className="transition-transform group-hover:translate-x-1"></Icon>
                        </Link>
                    </Button>
                </div>
                </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="glass-card group relative overflow-hidden"
            >
              <div className="flex flex-col space-y-4 h-full justify-between">
                <p className="leading-relaxed">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div className='flex flex-col align-bottom'>
                   <Separator className='my-4'/>
                  <p className="font-semibold pb-2">
                    {testimonial.name}
                    <span className="mx-1.5 font-normal">•</span>
                    <span className="font-normal">{testimonial.title}</span>
                  </p>
                  <p className="text-sm">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
