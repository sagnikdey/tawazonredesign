import React from 'react';
import Image from 'next/image';
import Navigation from '../../components/navigation';
import Footer from '../../components/footer';
import KpiBox from '../../components/kpi-box';
import { Icon } from '@iconify/react';
import { Separator } from '@/components/ui/separator';
import Team from '@/components/team';

export default function AboutUsPage() {
  return (
    <>
    <div className="min-h-screen items-center justify-center">
      <Navigation />
      
      
    {/* Global Reach Section with World Map */}
    <section className="sm:py-32 dark:bg-[#0a0a0a] bg-zinc-100 pt-24 pb-24 overflow-hidden">
        <div className="sm:px-12 xl:px-24 max-w-[1400px] mr-auto ml-auto pr-6 pl-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left Content */}
            <div className="lg:col-span-6">
            <div className="mb-8 flex w-fit items-center gap-2 rounded-full border border-zinc-200 bg-white/50 px-3 py-1 text-xs text-zinc-600 backdrop-blur-sm dark:border-white/10 dark:bg-white/5 dark:text-zinc-300">
                <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                <span>About Us</span>
              </div>
              <h2 className="dark:text-white md:text-4xl lg:text-5xl text-3xl font-semibold text-zinc-900 tracking-tight leading-tight">
                Redefining excellence in chemical distribution
              </h2>
              <p className="mt-6 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                Tawazon Chemical Co. LLC is a multinational organization with over three decades of experience. Headquartered in Dubai, the company manages a network of offices across Africa, the Middle East, the Subcontinent, and Southeast Asia, ensuring strong regional presence. It supplies specialty chemicals for Coatings, Construction, Inks, Plastics, Packaging, Fiberglass, Rubber, and Food. With strong global partnerships and an optimized supply chain, Tawazon ensures technical support, innovative solutions, and reliable service.
              </p>
              
              <h3 className="dark:text-white md:text-2xl text-xl font-semibold text-zinc-900 tracking-tight mt-10">
                Global Reach, Local Expertise
              </h3>
              <p className="mt-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                Operating in diverse markets across the globe, Tawazon&apos;s reach is extensive, yet its approach remains deeply personal. The company recognizes that every market comes with its own needs and challenges, and is committed to delivering solutions as dynamic and diverse as the industries it serves. With a global footprint spanning over eight offices and expertise across eight specialized business verticals, Tawazon&apos;s team of more than 165 skilled professionals works collaboratively to provide tailored solutions that empower customers and drive progress across a wide range of focused industries.
              </p>
            </div>

            {/* Right Content - World Map with KPIs */}
            <div className="lg:col-span-6 relative">
              
              
              {/* Middle Row with Map */}
              <div className="relative">
                {/* KPI on left side of map */}
                <div className="absolute left-0 top-1/4 z-10 hidden md:block">
                  
                </div>

                {/* World Map */}
                <div className="relative w-full h-[300px] md:h-[400px]">
                  <Image
                    src="/assests/images/Flat-world-map-with-transparent-background.png"
                    alt="World map showing Tawazon global presence"
                    fill
                    className="object-contain opacity-60"
                  />
                  
                  {/* Location Dots */}
                  {/* Dubai */}
                  <div className="absolute top-[38%] left-[58%] w-3 h-3 bg-emerald-500 rounded-full animate-pulse shadow-lg shadow-emerald-500/50"></div>
                  {/* India */}
                  <div className="absolute top-[42%] left-[65%] w-3 h-3 bg-emerald-500 rounded-full animate-pulse shadow-lg shadow-emerald-500/50"></div>
                  {/* Africa - Kenya */}
                  <div className="absolute top-[52%] left-[54%] w-3 h-3 bg-emerald-500 rounded-full animate-pulse shadow-lg shadow-emerald-500/50"></div>
                  {/* Africa - Nigeria */}
                  <div className="absolute top-[48%] left-[48%] w-3 h-3 bg-emerald-500 rounded-full animate-pulse shadow-lg shadow-emerald-500/50"></div>
                  {/* Southeast Asia */}
                  <div className="absolute top-[48%] left-[72%] w-3 h-3 bg-emerald-500 rounded-full animate-pulse shadow-lg shadow-emerald-500/50"></div>
                  {/* Pakistan */}
                  <div className="absolute top-[38%] left-[62%] w-3 h-3 bg-emerald-500 rounded-full animate-pulse shadow-lg shadow-emerald-500/50"></div>
                  {/* Bangladesh */}
                  <div className="absolute top-[42%] left-[68%] w-3 h-3 bg-emerald-500 rounded-full animate-pulse shadow-lg shadow-emerald-500/50"></div>
                  {/* Saudi Arabia */}
                  <div className="absolute top-[40%] left-[55%] w-3 h-3 bg-emerald-500 rounded-full animate-pulse shadow-lg shadow-emerald-500/50"></div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 mb-4 justify-end">
                <KpiBox value="30+" label="Years of experience" variant="primary" />
                <KpiBox value="8" label="Office(s) Worldwide" variant="secondary" />
                <KpiBox value="8" label="Business Verticals" variant="outline" />
              </div>
              {/* KPI Boxes - Bottom Row */}
              <div className="grid grid-cols-3 gap-3 mt-4 justify-center md:justify-end">
                <KpiBox value="51" label="Countries & Counting" variant="secondary" />
                <KpiBox value="1800+" label="Satisfied Customers" variant="secondary" />
                <KpiBox value="350+" label="Suppliers" variant="secondary" />
              </div>
              {/* KPI Boxes - Top Row */}
              

              {/* Mobile KPI for Suppliers */}
              <div className="mt-4 md:hidden">
                <KpiBox value="350+" label="Suppliers" variant="secondary" />
              </div>
            </div>
          </div>
        </div>
      </section>




      

      <section className="sm:py-32 dark:bg-[#131313] bg-white pt-24 pb-24">
        <div className="sm:px-12 xl:px-24 max-w-[1400px] mr-auto ml-auto pr-6 pl-6">
          
          <div className="mb-8 md:flex md:items-end md:justify-between">
            <div className="max-w-xl">
              <div className="mb-8 flex w-fit items-center gap-2 rounded-full border border-zinc-200 bg-white/50 px-3 py-1 text-xs text-zinc-600 backdrop-blur-sm dark:border-white/10 dark:bg-white/5 dark:text-zinc-300">
                <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                <span>Ghobash Group Enterprise</span>
              </div>
              <h1 className="dark:text-white md:text-5xl text-3xl font-semibold text-zinc-900 tracking-tight">Tawazon - Proud to be a Ghobash Group Enterprise</h1>
              <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
              Tawazon Chemical Co. LLC takes pride in being part of Ghobash Group.
              </p>
              
            </div>
            <div className="mt-6 md:mt-0">
                    <a href="#" className="group flex items-center gap-2 text-sm text-zinc-900 hover:text-zinc-600 dark:text-white dark:hover:text-zinc-300">
                        Visit Ghobash Group
                        <Icon icon="solar:arrow-right-linear" className="transition-transform group-hover:translate-x-1"></Icon>
                    </a>
                </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-12">
            
            {/* Card 1: Main Focus (Large) */}
            <div>
              <p className="mb-6 max-w-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
                  With its corporate strategy focused on growth, sustainability and value creation, Ghobash Group extends a unique approach to nurturing and developing the most rewarding opportunities both intuitively and systematically. The Group seeks progressive partners and principals whose innovative products and services can deliver to the growing needs and aspirations of the public and private sectors.
                  </p>
                  <Separator />
                  <ul className="animate-fadeSlideIn_0.8s_ease-out_0.4s_both animate-on-scroll mb-8 space-y-4 py-8">
            <li className="flex items-start gap-3">
              <div className="shrink-0 w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"
                  className="lucide lucide-check text-emerald-400">
                  <path d="M20 6 9 17l-5-5" className=""></path>
                </svg>
              </div>
              <div className="">
                <p className="font-medium xl:text-left">
                Established in 1981 with its headquarters in the UAE.
                </p>
                
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="shrink-0 w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"
                  className ="lucide lucide-check text-emerald-400">
                  <path d="M20 6 9 17l-5-5" className=""></path>
                </svg>
              </div>
              <div className="">
                <p className="font-medium xl:text-left">
                Premier privately-owned business conglomerate with unrivalled operational capabilities.
                </p>
             
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="shrink-0 w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"
                  className   ="lucide lucide-check text-emerald-400">
                  <path d="M20 6 9 17l-5-5" className=""></path>
                </svg>
              </div>
              <div className="">
                <p className="font-medium xl:text-left">
                Diverse team of 1,750+ professionals.
                </p>
               
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="shrink-0 w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center mt-0.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"
                  className   ="lucide lucide-check text-emerald-400">
                  <path d="M20 6 9 17l-5-5" className=""></path>
                </svg>
              </div>
              <div className="">
                <p className="font-medium  xl:text-left">
                Operating across multiple sectors of the economy.

                </p>
               
              </div>
            </li>
          </ul>
            </div>

            {/* Card 2: Minimalist */}
            <div className="md:row-span-">
              <div className="relative z-10 flex h-full flex-col justify-between backdrop-blur-2xl bg-white/10 dark:bg-zinc-900/10 border dark:border-zinc-800/50 rounded-sm p-4 ">
                
               <Image src="/assests/images/handshake.jpg" alt="Ghobash Group Enterprise" width={500} height={500} className="w-full h-full object-cover dark:brightness-75 rounded-sm" />
               
               
               </div>
             </div>
           </div>
         </div>
       </section>







<section className="dark:bg-[#0a0a0a] bg-zinc-100 pb-24 pt-24 sm:py-32">
  <Team />
</section>




       </div>
       <Footer />
       </>
   );
 }
