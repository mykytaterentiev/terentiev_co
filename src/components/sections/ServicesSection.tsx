import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

interface SectionProps {
  id: string;
}

const services = [
  {
    title: "Проектування",
    description: "Розробка архітектурних концепцій. Створення технічної документації. Узгодження з державними органами.",
  },
  {
    title: "Будівництво",
    description: "Зведення житлових комплексів. Будівництво комерційних об'єктів. Промислове будівництво.",
  },
  {
    title: "Реконструкція",
    description: "Капітальний ремонт. Відновлення історичних будівель. Модернізація застарілих об'єктів.",
  },
  {
    title: "Інженерні системи",
    description: "Монтаж електричних мереж. Встановлення систем вентиляції. Облаштування водопостачання.",
  },
];

const ServicesSection: React.FC<SectionProps> = ({ id }) => {
  return (
    <section id={id} className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Наші Послуги</h2> 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;