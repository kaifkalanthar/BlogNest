const HomeCard = () => {
  const data = [
    { total: 122, name: "Blogs" },
    { total: 64, name: "Organizations" },
    { total: 1232, name: "Total views" },
  ];
  return (
    <div className="flex bg-primary md:p-20 p-5 -mx-10 justify-around text-center mt-10">
      {data.map((item, index) => (
        <div key={index + 1}>
          <h1 className="text-5xl">{item.total}+</h1>
          <h1>{item.name}</h1>
        </div>
      ))}
    </div>
  );
};

export default HomeCard;
