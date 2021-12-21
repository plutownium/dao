import SearchCard from "./SearchCard";

function SearchGrid({ companies }) {
  return (
    <div className="w-full h-100 flex flex-wrap justify-between">
      {companies.map(({ name, description }, index) => {
        return <SearchCard key={index} name={name} />;
      })}
    </div>
  );
}

export default SearchGrid;
