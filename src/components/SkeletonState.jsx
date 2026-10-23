import "./SkeletonState.css";

function SkeletonState() {
  return (
    <div className="skeleton__container">
      {[1, 2, 3, 4].map((item) => (
        <div className="skeleton__card" key={item}>
          <div className="skeleton__image"></div>
          <div className="skeleton__title"></div>
          <div className="skeleton__description"></div>
        </div>
      ))}
    </div>
  );
}

export default SkeletonState;