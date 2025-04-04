import heroBgImage from '@/assets/building.jpg'; 

interface SectionProps {
  id: string;
}

const HeroSection: React.FC<SectionProps> = ({ id }) => {
  return (
    <section
      id={id}
      className="text-white min-h-[70vh] flex items-center relative bg-cover bg-center" 
      style={{ backgroundImage: `url(${heroBgImage})` }} 
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>

      <div className="container mx-auto text-center relative z-10 p-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-md">ТОВ «TERENTIEV Co»</h1> 
        <p className="text-lg md:text-xl max-w-3xl mx-auto drop-shadow-md">
          Будівельна компанія, яка з 2025 року активно працює у сфері комерційного будівництва в Україні. Ми зосереджені на створенні якісних та безпечних об’єктів, використовуючи інноваційні технології та найкращі будівельні рішення.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;