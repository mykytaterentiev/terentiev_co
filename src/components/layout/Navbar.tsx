import { Link } from 'react-scroll'; 

const Navbar = () => {
  const navItems = [
    { id: 'home', title: 'Головна' }, 
    { id: 'services', title: 'Наші Послуги' }, 
    { id: 'calculator', title: 'Калькулятор' }, 
    { id: 'contact', title: 'Контакти' }, 
  ];

  return (
    <nav className="bg-gray-800 text-white p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
           <img src="/logo.png" alt="Логотип ТОВ TERENTIEV Co" className="h-10 w-auto" /> 
           <span className="text-xl font-bold">ТОВ «TERENTIEV Co»</span> 
        </div>

        <ul className="flex space-x-6">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                to={item.id}
                spy={true}
                smooth={true}
                offset={-70} 
                duration={500}
                className="hover:text-yellow-400 cursor-pointer transition duration-300"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;