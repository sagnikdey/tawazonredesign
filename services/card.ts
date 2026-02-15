export interface CardData {
  id: number;
  image: string;
  header: string;
  content: string;
  buttonText: string;
  buttonLink: string;
}

export const cards: CardData[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop",
    header: "Specialty Chemicals Distribution",
    content: "We provide high-quality specialty chemicals to industries across the globe, ensuring consistent supply and exceptional service.",
    buttonText: "Explore Products",
    buttonLink: "#products"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    header: "Global Supply Chain",
    content: "With offices in 8 countries and partnerships worldwide, we ensure seamless delivery and logistics for our clients.",
    buttonText: "Learn More",
    buttonLink: "#supply-chain"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&h=600&fit=crop",
    header: "Quality Assurance",
    content: "Our rigorous quality control processes ensure that every product meets international standards and your specific requirements.",
    buttonText: "View Standards",
    buttonLink: "#quality"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    header: "Technical Support",
    content: "Our team of 165+ professionals provides expert technical support and consultation to help you achieve your goals.",
    buttonText: "Get Support",
    buttonLink: "#support"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop",
    header: "Sustainable Solutions",
    content: "We're committed to providing eco-friendly chemical solutions that support sustainability and environmental responsibility.",
    buttonText: "Discover More",
    buttonLink: "#sustainability"
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
    header: "Industry Expertise",
    content: "With 30+ years of experience, we serve diverse industries including pharmaceuticals, agriculture, manufacturing, and more.",
    buttonText: "View Industries",
    buttonLink: "#industries"
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&h=600&fit=crop",
    header: "Custom Solutions",
    content: "We work closely with clients to develop tailored chemical solutions that meet their unique business needs and challenges.",
    buttonText: "Request Quote",
    buttonLink: "#contact"
  }
];
