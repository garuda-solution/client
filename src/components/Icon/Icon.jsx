const Icon = ({ variant = "", color = "black", size = 20 }) => {
  const icons = {
    "arrow-up-right": (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        fill={color}
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
        />
      </svg>
    ),
    "arrow-right-short": (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        fill={color}
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8"
        />
      </svg>
    ),
  };

  return icons[variant];
};

export default Icon;
