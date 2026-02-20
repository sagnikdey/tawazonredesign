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
}

export const locations: OfficeLocation[] = [
  {
    officename: 'Tawazon Chemical Company LLC',
    id: 'dubai',
    city: 'Dubai',
    country: 'UAE',
    address: 'Suites 301/308, 3rd Floor, Al Khaleej Building, Zabeel Street, Dubai, UNITED ARAB EMIRATES',
    poBox: '52161',
    tel: '+971 4 336 8230',
    //fax: '+971 4 336 7357',
    email: 'info@tawazon.in',
  },
  {
    officename: 'TRANS INDUSTRIAL TRADING COMPANY',
    id: 'Saudi Arabia',
    city: 'Jeddah',
    country: 'Saudi Arabia',
    address: 'Exit 18 Istanbul Street, Al Khomra, King Faisal Road, Near Bahria Round About, Jeddah, Kingdom of Saudi Arabia, P. O. Box 16114',
    poBox: '52161',
    tel: '+966 55 337 7532',
    email: 'info@tawazon.in',
  },
  {
    officename: 'TRANS INDUSTRIAL TRADING COMPANY',
    id: 'RIYADH',
    city: 'RIYADH',
    country: 'Saudi Arabia',
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
    address: 'Tarpo Gowdown No. 4, Road C Off Enterprise Road, Industrial Area, Nairobi, Kenya, P.O. Box 71-00606',
    poBox: '52161',
    tel: '+254 72 811 1203',
    //fax: '+971 4 336 7357',
    email: 'info.ke@tawazon.ae',
  },
  {
    officename: 'TAWAZON CHEMICAL INDIA PRIVATE LIMITED',
    id: 'Chennai',
    city: 'Chennai',
    country: 'India',
    address: 'New No 14, Old No 598, 2nd Floor, Alagiriswamy Salai, KK Nagar, Chennai, Tamil Nadu, India, PIN- 600 078',
    poBox: '52161',
    tel: '+91 95384 90323',
    //fax: '+971 4 336 7357',
    email: 'info@tawazon.ae',
  },
  {
    officename: 'TAWAZON CHEMICAL INDIA PRIVATE LIMITED',
    id: 'Mumbai',
    city: 'Mumbai',
    country: 'India',
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
    address: 'Vivo Business Park Block I No. 6jl. Pembangunan Iii, Kel. Karangsari Kec. Neglasarikota Tangerang – Banten, Indonesia, P.O. Box 15121',
    poBox: '52161',
    tel: '+62 212 986 7783',
    //fax: '+971 4 336 7357',
    email: 'info@tawazon.ae',
  },
  {
    officename: 'TAWAZON SOUTH AFRICA (PTY) LTD',
    id: 'Umhlanga',
    city: 'Umhlanga',
    country: 'South Africa',
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
    address: 'PO Box 17639, Jebel Ali free zone, Dubai UAE',
    poBox: '52161',
    tel: '+0097143368230',
    //fax: '+971 4 336 7357',
    email: 'info@tawazon.ae',
  },
];
