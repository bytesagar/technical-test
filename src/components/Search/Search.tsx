import styles from "./Search.module.css";

interface ISearchProps
  extends React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    React.AriaAttributes {}

interface ISearchProps {
  icon?: boolean;
}
const Search = ({ icon, ...props }: ISearchProps) => {
  return (
    <div className={styles.input_wrapper}>
      {icon && (
        <div className={styles.icon_wrapper}>
          <svg
            className="w-5 h-5 text-gray-500"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
      )}
      <input type="text" placeholder="Search here" {...props} />
    </div>
  );
};

export default Search;
