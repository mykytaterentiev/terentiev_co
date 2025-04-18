interface SectionProps {
    id: string;
  }
  
  const AboutSection: React.FC<SectionProps> = ({ id }) => {
      return (
        <section id={id} className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto space-y-8">
            <div className="max-w-4xl mx-auto text-gray-700 space-y-4 text-lg text-justify">
              <p>
                Наша команда складається з висококваліфікованих проєктувальників, конструкторів, інженерів та інших фахівців, які мають значний досвід у розробці й реалізації технічно складних проєктів. Ми розуміємо особливості будівництва споруд різного призначення та забезпечуємо їхню довговічність і надійність.
              </p>
              <p>
                ТОВ «TERENTIEV Co» займається проєктуванням, будівництвом і оснащенням промислових, сільськогосподарських, торгових, спортивних та інших об’єктів, дотримуючись сучасних стандартів і вимог безпеки. У нашій роботі ми використовуємо лише перевірені матеріали та новітнє обладнання, що гарантує якість на кожному етапі реалізації проєкту.
              </p>
              <p>
                Ми постійно розвиваємося, вдосконалюємо технології та впроваджуємо інноваційні рішення, аби залишатися надійним партнером для наших клієнтів. Індивідуальний підхід до кожного замовника дозволяє нам враховувати всі потреби та пропонувати оптимальні будівельні рішення будь-якої складності.
              </p>
              <p className="font-semibold text-center pt-4">
                ТОВ «TERENTIEV Co» – надійний партнер у реалізації ваших будівельних ідей!
              </p>
            </div>
          </div>
        </section>
      );
  };
  
  export default AboutSection;