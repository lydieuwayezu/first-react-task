const IdCard = ({ id, name, role, department, avatar }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 w-80 border-2 border-gray-400">
      <div className="flex items-center gap-4 mb-4">
        <img 
          src={avatar} 
          alt={name} 
          className="w-20 h-20 rounded-full object-cover border-2 border-blue-600"
        />
        <div className="flex-1">
          <h2 className="text-xl font-bold text-gray-700">{name}</h2>
          <p className="text-sm text-gray-500">ID: {id}</p>
        </div>
      </div>
      <div className="border-t pt-4">
        <p className="text-gray-700 font-semibold">Role: <span className="font-normal">{role}</span></p>
        <p className="text-gray-700 font-semibold">Department: <span className="font-normal">{department}</span></p>
      </div>
    </div>
  );
};

export default IdCard;
