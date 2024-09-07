import "./posts-filter-bar.scss";

type chipProps = {
  label: string;
};
const PostsFilterBar = () => {
  return (
    <div className="chips-container">
      <Chip label="Vegan" />
      <Chip label="Gluten-Free" />
      <Chip label="Beginner Friendly" />
      <Chip label="Under 30 Mins" />
      <Chip label="Desserts" />
      <Chip label="High Protein" />
    </div>
  );
};

const Chip = (props: chipProps) => {
  return <div className="chip">{props.label}</div>;
};

export default PostsFilterBar;
