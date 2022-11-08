import classes from "./search.module.css";

type propsType = {
    handleOnChange: (searchTerm: string) => void;
};

function Search(props : propsType) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.handleOnChange(event.target.value);
  };

  return (
    <div className={classes.search}>
      <input onChange={handleChange} type="text" placeholder="Search" />
    </div>
  );
}

export default Search;
