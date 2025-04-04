import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";


interface SectionProps {
  id: string;
}

const CalculatorSection: React.FC<SectionProps> = ({ id }) => {
  const [objectType, setObjectType] = useState("commercial");
  const [area, setArea] = useState<number | string>('');
  const [material, setMaterial] = useState("standard");
  const [workType, setWorkType] = useState("build_only");
  const [complexity, setComplexity] = useState("standard");
  const [options, setOptions] = useState({
    architecture: false,
    engineering: false,
    insulation: false,
    landscaping: false,
    support: false,
  });
  const [result, setResult] = useState<number | null>(null);

  const calculateCost = () => {
      const numericArea = Number(area);
      if (isNaN(numericArea) || numericArea <= 0) {
        setResult(null);
        alert("Будь ласка, введіть коректну площу."); 
        return;
      }
      let baseRate = 0;
      switch (objectType) {
          case "commercial": baseRate = 7500; break;
          case "private": baseRate = 6500; break;
          case "industrial": baseRate = 8000; break;
          case "pavilion": baseRate = 6000; break;
          case "sports": baseRate = 8500; break;
          default: baseRate = 7000;
      }
      switch (material) {
        case "basic": baseRate *= 0.8; break;
        case "standard": baseRate *= 1.0; break;
        case "premium": baseRate *= 1.3; break;
      }
      if (workType === "project_build") baseRate *= 1.2;
      if (workType === "turnkey") baseRate *= 1.5;
      if (complexity === "medium") baseRate *= 1.1;
      if (complexity === "high") baseRate *= 1.25;
      let optionalCost = 0;
      if (options.architecture) optionalCost += numericArea * 300;
      if (options.engineering) optionalCost += numericArea * 400;
      if (options.insulation) optionalCost += numericArea * 250;
      if (options.landscaping) optionalCost += numericArea * 150;
      if (options.support) optionalCost += 5000;
      const totalCost = (numericArea * baseRate) + optionalCost;
      setResult(totalCost);
  };

  const handleOptionChange = (optionName: keyof typeof options) => {
      setOptions(prev => ({ ...prev, [optionName]: !prev[optionName] }));
  };

  return (
    <section id={id} className="py-16 px-4 bg-gray-100">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-3xl font-bold text-center mb-4">🧮 Будівельний калькулятор від TERENTIEV Co</h2>
        <p className="text-center text-gray-600 mb-10 max-w-2xl">
          Отримайте попередню оцінку вартості вашого будівельного проєкту. Заповніть деталі нижче.
        </p>

        <Card className="w-full max-w-3xl p-6 md:p-8 shadow-xl">
          <CardContent className="space-y-6">

            <div>
              <Label className="text-lg font-semibold block mb-3">Крок 1: Виберіть тип об’єкта</Label>
              <Select value={objectType} onValueChange={setObjectType}>
                <SelectTrigger><SelectValue placeholder="Виберіть тип..." /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="commercial">🏢 Комерційна будівля</SelectItem>
                  <SelectItem value="private">🏠 Приватний будинок</SelectItem>
                  <SelectItem value="industrial">🏭 Промисловий об’єкт</SelectItem>
                  <SelectItem value="pavilion">🏪 Торговий павільйон</SelectItem>
                  <SelectItem value="sports">🏗 Спортивна споруда</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
                <Label className="text-lg font-semibold block mb-3">Крок 2: Вкажіть основні параметри</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="area">📏 Площа об’єкта (м²)</Label>
                      <Input id="area" type="number" placeholder="напр., 100" value={area} onChange={(e) => setArea(e.target.value)} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="material">🧱 Тип матеріалів</Label>
                      <Select value={material} onValueChange={setMaterial}>
                        <SelectTrigger id="material"><SelectValue /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="basic">Базові</SelectItem>
                          <SelectItem value="standard">Середній клас</SelectItem>
                          <SelectItem value="premium">Преміум</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="workType">🔧 Комплекс робіт</Label>
                      <Select value={workType} onValueChange={setWorkType}>
                        <SelectTrigger id="workType"><SelectValue /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="build_only">Лише будівництво</SelectItem>
                          <SelectItem value="project_build">Проєкт + будівництво</SelectItem>
                          <SelectItem value="turnkey">Під ключ (з внутрішнім оздобленням)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="complexity">⚙️ Складність проєкту</Label>
                      <Select value={complexity} onValueChange={setComplexity}>
                        <SelectTrigger id="complexity"><SelectValue /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="standard">Стандартна</SelectItem>
                          <SelectItem value="medium">Середня</SelectItem>
                          <SelectItem value="high">Висока</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                </div>
            </div>

            <div>
                <Label className="text-lg font-semibold block mb-3">Крок 3: Додаткові опції (за бажанням)</Label>
                <div className="space-y-3">
                   <div className="flex items-center space-x-2">
                     <Checkbox id="architecture" checked={options.architecture} onCheckedChange={() => handleOptionChange('architecture')} />
                     <Label htmlFor="architecture">✅ Архітектурний проєкт</Label>
                   </div>
                   <div className="flex items-center space-x-2">
                     <Checkbox id="engineering" checked={options.engineering} onCheckedChange={() => handleOptionChange('engineering')} />
                     <Label htmlFor="engineering">✅ Інженерні мережі (електрика, водопостачання)</Label>
                   </div>
                    <div className="flex items-center space-x-2">
                     <Checkbox id="insulation" checked={options.insulation} onCheckedChange={() => handleOptionChange('insulation')} />
                     <Label htmlFor="insulation">✅ Утеплення / енергоефективність</Label>
                   </div>
                    <div className="flex items-center space-x-2">
                     <Checkbox id="landscaping" checked={options.landscaping} onCheckedChange={() => handleOptionChange('landscaping')} />
                     <Label htmlFor="landscaping">✅ Ландшафтний дизайн</Label>
                   </div>
                   <div className="flex items-center space-x-2">
                     <Checkbox id="support" checked={options.support} onCheckedChange={() => handleOptionChange('support')} />
                     <Label htmlFor="support">✅ Супровід/консультація після здачі об'єкта</Label>
                   </div>
                </div>
            </div>

            <div className="text-center pt-4">
              <Button size="lg" onClick={calculateCost}>Розрахувати вартість</Button>

              {result !== null && (
                <div className="mt-6 p-4 bg-green-100 border border-green-300 rounded-md">
                  <div className="text-xl font-bold text-green-800">
                    💰 Орієнтовна вартість будівництва:
                  </div>
                  <div className="text-2xl font-semibold text-green-900 mt-2">
                    {result.toLocaleString('uk-UA', { style: 'currency', currency: 'UAH', minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                  </div>
                   <p className="text-sm text-gray-600 mt-3">
                    🔄 Це попередній розрахунок. Точний кошторис буде складено після консультації з нашим фахівцем.
                   </p>
                </div>
              )}
            </div>

             <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6 pt-6 border-t">
                 <Button variant="outline">🔘 Залишити заявку на консультацію</Button>
                 <Button variant="default">📞 Замовити дзвінок</Button>
             </div>

          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export default CalculatorSection;