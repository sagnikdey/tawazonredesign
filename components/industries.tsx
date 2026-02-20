import React from 'react'
import { Icon } from '@iconify/react';
import Card from './card';
import { Badge } from '@/components/ui/badge';
import { CircleDot} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from "next/link";
// import { Link as LinkIcon } from "lucide-react"; // only if you need it

const industries = () => {
  return (
    <>
    <section id="industries">
        <div className="sm:px-12 xl:px-24 max-w-[1400px] mr-auto ml-auto pr-6 pl-6">
            
            <div className="mb-8 md:flex md:items-end md:justify-between">
                
                <div className="max-w-xl mt-6 md:mt-0">
                    <Badge variant="outline">
                        <CircleDot data-icon="CircleDot" className='text-green-500'/>Industries Served
                    </Badge>
                    <h2 className="pt-8">Innovative solutions for a sustainable tomorrow.</h2>
                    <p className="mt-4 text-muted-foreground">Tawazon actively develops and supplies innovative, eco-friendly chemical solutions that support sustainability.
                        across diverse industries
                    </p>
                </div>
               
                
                <div className="mt-6 md:mt-0">
                    <Button variant="outline" asChild>
                        <Link href="/industries">
                            Read full story
                            <Icon icon="solar:arrow-right-linear" className="transition-transform group-hover:translate-x-1"></Icon>
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
        <Card />
    </section>
    
    </>
  )
}

export default industries