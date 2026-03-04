import IdCard from './components/IdCard';

function App() {
  const employees = [
    {
      id: 1,
      name: "Liliane nyakayiru",
      role: "Software Engineer",
      department: "web designer",
      avatar: "/images/person1.PNG"
    },
    {
      id: 2,
      name: "lydie uwayezu",
      role: "Product Manager",
      department: "Product",
      avatar: "/images/person2.jpg"  
    },
    {
      id: 3,
      name: "Lydie uwaayezu",
      role: "front-end developer",
      department: "Design",
      avatar: "/images/person3.jpg"  
    }
    
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">ID Card Generator</h1>
      <div className="flex flex-wrap justify-center gap-6">
        {employees.map((employee) => (

  <IdCard
            key={employee.id}
            id={employee.id}
            name={employee.name}
            role={employee.role}
            department={employee.department}
            avatar={employee.avatar}
          />
        ))}
      </div>
    </div>
  );
}


export default App;