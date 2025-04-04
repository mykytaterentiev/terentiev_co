const Footer = () => {
    const currentYear = new Date().getFullYear();
  
    return (
      <footer className="bg-gray-800 text-gray-400 p-6 text-center">
        <div className="container mx-auto">
          <p>© {currentYear} ТОВ «TERENTIEV Co». Всі права захищено.</p> 
          <p className="mt-2 text-sm">Створено за допомогою React & Tailwind CSS</p> 
        </div>
      </footer>
    );
  };
  
  export default Footer;