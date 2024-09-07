import "./trending-card.scss";

const TrendingCard = () => {
  return (
    <>
      <div className="trending-card">
        <h3>Trending</h3>
        <div className="tags-container">
          <span className="tags">#Coffee</span>
          <span className="tags">#Lomo Saltado</span>
          <span className="tags">#Cheesecake</span>
        </div>
      </div>
    </>
  );
};

export default TrendingCard;
