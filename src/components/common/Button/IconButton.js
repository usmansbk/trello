import Icon from "../Icon";

const IconButton = ({ name }) => {
  return (
    <button>
      <Icon name={name} />
    </button>
  );
};

export default IconButton;
