interface Props {
  onClick?: () => void;
  isMenuActive: boolean;
}

const Badge = ({ isMenuActive, onClick = () => {} }: Props) => {
  return (
    <div className="suggestions-page--header--badge">
      <div>
        <h2 className="h2 txt-white">Frontend Mentor</h2>
        <p className="b2 txt-white">Feedback Board</p>
      </div>
      <button
        onClick={() => onClick()}
        className={`suggestions-page--header--menu-btn-container ${
          isMenuActive ? "active" : ""
        } cursor-pointer`}
      >
        <span />
      </button>
    </div>
  );
};

export default Badge;
