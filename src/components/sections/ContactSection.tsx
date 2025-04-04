import MapEmbed from '../MapEmbed'; // Using updated OSM version
import { Button } from '@/components/ui/button';

interface SectionProps {
  id: string;
}

const ContactSection: React.FC<SectionProps> = ({ id }) => {
  // Keep data as is
  const address = "Україна, м. Запоріжжя, вул. Автозаводська, буд. 22"; 
  const phone = "+380676303400";

  return (
    <section id={id} className="py-16 px-4 bg-gray-200">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Контакти</h2> 
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">Наша адреса:</h3> 
              <p className="text-lg text-gray-700">{address}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Телефон:</h3> 
              <a href={`tel:${phone}`} className="text-lg text-blue-600 hover:underline">{phone}</a>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Потрібна допомога?</h3> 
              <Button size="lg" onClick={() => window.location.href = `tel:${phone}`}>
                Замовити Консультацію 
              </Button>
            </div>
          </div>

          <div>
             <h3 className="text-xl font-semibold mb-3 text-center md:text-left">Знайдіть нас тут:</h3> {/* Translated */}
             <MapEmbed /> 
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;