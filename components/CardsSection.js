import Image from "next/image";
import ArrowButton from "./ArrowButton";

/**
 * CardsSection Component
 * 
 * Displays three feature cards in a responsive grid layout highlighting
 * the Projects, Workshops, and Team aspects of UCDevs.
 */
export default function CardsSection() {
  /**
   * Reusable Card Component
   * 
   * Creates consistent card elements with image, title, description, and call-to-action.
   * 
   * @param {Object} props - Component props
   * @param {string} props.imageSrc - Path to card's image
   * @param {string} props.imageAlt - Alt text for accessibility
   * @param {string} props.title - Card heading text
   * @param {string} props.description - Card body text
   * @param {string} props.linkHref - URL for Learn More button
   * @param {boolean} props.isWide - Whether card spans multiple columns on md screens
   */
  const Card = ({ 
    imageSrc, 
    imageAlt, 
    title, 
    description, 
    linkHref, 
    isWide = false 
  }) => (
    <div className={`border border-white/20 border sm:border-2 rounded-[0px] p-3 sm:p-3 mb-[-2px] sm:mr-[-1px] flex flex-col h-full ${
      isWide ? 'md:col-span-2 lg:col-span-1' : ''
    }`}>
      {/* Image container that takes full width of card */}
      <div className="w-full relative h-[208px] sm:h-[516px] rounded-[0px] overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          style={{ objectFit: 'cover' }}
          className="rounded-t-[0px]"
        />
      </div>
      
      {/* Card content */}
      <h2 className="mt-4 text-white text-2xl lg:text-3xl font-bold mb-3">{title}</h2>
      <p className="text-gray-300 mb-6 flex-grow">
        {description}
      </p>
      
      {/* Call to action button with arrow */}
      <ArrowButton 
        href={linkHref}
        text="Learn More"
        className="self-start"
      />
    </div>
  );

  // Card data array - contains all information for each card
  // This structured approach makes it easy to add/modify cards in the future
  const cardsData = [
    {
      imageSrc: "/index_project.svg",
      imageAlt: "Projects illustration",
      title: "Projects",
      description: "UCDevs takes on projects for nonprofits to help our members build experience in web development.",
      linkHref: "#projects"
    },
    {
      imageSrc: "/index_workshop.png",
      imageAlt: "Workshops illustration",
      title: "Workshops",
      description: "UCDevs holds workshops and lectures to get you up to speed with web development. No experience required.",
      linkHref: "#workshops"
    },
    {
      imageSrc: "/index_team.png",
      imageAlt: "Team illustration",
      title: "Team",
      description: "We're a team of polished web developers, designers, and engineers with the agency to spearhead substantial projects.",
      linkHref: "#team",
      isWide: true  // This card spans two columns on medium screens
    }
  ];

  return (
    // Main section container with responsive padding
    <div className="bg-[#101010] py-16 px-4 md:px-16">
      <div className="container mx-auto">
        {/* Responsive grid layout
         * - 1 column on mobile
         * - 2 columns on medium screens
         * - 3 columns on large screens
         */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          {/* Map through card data to generate cards dynamically */}
          {cardsData.map((card, index) => (
            <Card
              key={index}
              imageSrc={card.imageSrc}
              imageAlt={card.imageAlt}
              title={card.title}
              description={card.description}
              linkHref={card.linkHref}
              isWide={card.isWide}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
