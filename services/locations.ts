/**
 * Tawazon Chemical Company LLC - Office Locations
 */

export interface OfficeLocation {
  officename: string;
  id: string;
  city: string;
  country: string;
  address: string;
  poBox?: string;
  tel: string;
  //fax?: string;
  email: string;
  /** Latitude for map display (equirectangular projection) */
  lat?: number;
  /** Longitude for map display */
  lng?: number;
}

export const locations: OfficeLocation[] = [
  {
    officename: 'Tawazon Chemical Company LLC',
    id: 'dubai',
    city: 'Dubai',
    country: 'UAE',
    lat: 25.2048,
    lng: 55.2708,
    address: 'Suites 301/308, 3rd Floor, Al Khaleej Building, Zabeel Street, Dubai, UNITED ARAB EMIRATES',
    poBox: '52161',
    tel: '+971 4 336 8230',
    //fax: '+971 4 336 7357',
    email: 'info@tawazon.in',
  },
  {
    officename: 'Trans Industrial Trading Company',
    id: 'Saudi Arabia',
    city: 'Jeddah',
    country: 'Saudi Arabia',
    lat: 21.5433,
    lng: 39.1728,
    address: 'Exit 18 Istanbul Street, Al Khomra, King Faisal Road, Near Bahria Round About, Jeddah, Kingdom of Saudi Arabia, P. O. Box 16114',
    poBox: '52161',
    tel: '+966 55 337 7532',
    email: 'info@tawazon.in',
  },
  {
    officename: 'Trans Industrial Trading Company',
    id: 'RIYADH',
    city: 'RIYADH',
    country: 'Saudi Arabia',
    lat: 24.7136,
    lng: 46.6753,
    address: 'Exit 18 Istanbul Street, Al Sulei, Riyadh 11365, Kingdom Of Saudi Arabia, P. O. Box 391788',
    poBox: '52161',
    tel: '+966 50 938 2472',
    //fax: '+971 4 336 7357',
    email: 'info@transindustrial.ae',
  },
  {
    officename: 'Tawazon chemical company E.A. LTD',
    id: 'Nairobi',
    city: 'Nairobi',
    country: 'Kenya',
    lat: -1.2864,
    lng: 36.8172,
    address: 'Tarpo Gowdown No. 4, Road C Off Enterprise Road, Industrial Area, Nairobi, Kenya, P.O. Box 71-00606',
    poBox: '52161',
    tel: '+254 72 811 1203',
    //fax: '+971 4 336 7357',
    email: 'info.ke@tawazon.ae',
  },
  {
    officename: 'Tawazon Chemical India Private Limited',
    id: 'Chennai',
    city: 'Chennai',
    country: 'India',
    lat: 13.0827,
    lng: 80.2707,
    address: 'New No 14, Old No 598, 2nd Floor, Alagiriswamy Salai, KK Nagar, Chennai, Tamil Nadu, India, PIN- 600 078',
    poBox: '52161',
    tel: '+91 95384 90323',
    //fax: '+971 4 336 7357',
    email: 'info@tawazon.ae',
  },
  {
    officename: 'Tawazon Chemical India Private Limited',
    id: 'Mumbai',
    city: 'Mumbai',
    country: 'India',
    lat: 19.076,
    lng: 72.8777,
    address: '14, 2nd Floor, Om Heera Panna Mall, Near Oshivara Police Station Oshivara, Andheri west, Mumbai, INDIA, PIN- 400053',
    poBox: '52161',
    tel: '+91 98923 44138/022-4264 9160',
    //fax: '+971 4 336 7357',
    email: 'info@tawazon.ae',
  },
  {
    officename: 'Pt. Tawazon chemical',
    id: 'Banten',
    city: 'Banten',
    country: 'Indonesia',
    lat: -6.1783,
    lng: 106.6319,
    address: 'Vivo Business Park Block I No. 6jl. Pembangunan Iii, Kel. Karangsari Kec. Neglasarikota Tangerang – Banten, Indonesia, P.O. Box 15121',
    poBox: '52161',
    tel: '+62 212 986 7783',
    //fax: '+971 4 336 7357',
    email: 'info@tawazon.ae',
  },
  {
    officename: 'Tawazon South Africa (PTY) Ltd',
    id: 'Umhlanga',
    city: 'Umhlanga',
    country: 'South Africa',
    lat: -29.7275,
    lng: 31.0791,
    address: 'Spaces Umhlanga, 2 Ncondo Place, Umhlanga Rocks, 4320',
    poBox: '52161',
    tel: '+27311403187',
    //fax: '+971 4 336 7357',
    email: 'info@tawazon.ae',
  },
  {
    officename: 'Tawazon chemical company LLC JAFZA',
    id: 'Jafza',
    city: 'Jafza',
    country: 'UAE',
    lat: 25.0572,
    lng: 55.1158,
    address: 'PO Box 17639, Jebel Ali free zone, Dubai UAE',
    poBox: '52161',
    tel: '+0097143368230',
    //fax: '+971 4 336 7357',
    email: 'info@tawazon.ae',
  },
];
