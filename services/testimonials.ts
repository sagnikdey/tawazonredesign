export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  title: string;
  company: string;
  avatar: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    quote:
      'I have had the pleasure of working with Tawazon for over three decades, and it has been an exceptional journey. Beyond their consistent supply of high-quality raw materials, what truly sets them apart is their personal touch in every business interaction. ',
    name: 'Bipin Shah',
    title: 'Director',
    company: 'Basco Paints',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma&backgroundColor=ff6b35',
    rating: 5,
  },
  {
    id: '2',
    quote:
      'Goldstar and Tawazon have been partners for almost two and a half decades, and our journey together has been one of trust, reliability, and shared success. Tawazon’s commitment to consistent quality and prompt shipments has played a vital role in ensuring our operations run smoothly.',
    name: 'Kulathu Srinivasan',
    title: 'CEO',
    company: 'Goldstar',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Raj&backgroundColor=4f46e5',
    rating: 5,
  },
  {
    id: '3',
    quote:
      'Kansai Plascon Tanzania has worked with Tawazon for nearly three decades, benefiting from their reliability, market expertise, and commitment to quality. Their prompt shipments, competitive pricing, and excellent customer service have consistently supported our operations. The team is highly responsive and always willing to go the extra mile, making them a valued partner.',
    name: 'Hussein Jamal',
    title: 'Managing Director',
    company: 'Kansai Plascon Tanzania',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah&backgroundColor=059669',
    rating: 5,
  },
];
