const Filter = ({newSearch,handleNewSearch}) => (
    <div>
        <input value={newSearch} onChange={handleNewSearch} />
    </div>
  );

export default Filter
