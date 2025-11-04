function App() {
  const scrollToSection = (section_name: string) => {
    document.getElementById(section_name)?.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  };

  return (
    <div>
      <button onClick={scrollToAbout} className="p-2 bg-blue-600 text-white rounded">
        Scroll to About
      </button>

      <section className="h-screen bg-gray-100 flex items-center justify-center">
        <h1>Home Section</h1>
      </section>

      <section id="about" className="h-screen bg-gray-200 flex items-center justify-center">
        <h1>About Section</h1>
      </section>
    </div>
  );
}

export default App;
