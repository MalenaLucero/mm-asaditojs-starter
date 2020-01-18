import React from "react"

const Button = ({ category, getRandomGifUrl, addFavoriteGif }) => {
  return (
    <button
      type="button"
      className={`button button--${category}`}
      onClick={() =>
        category === "random" ? getRandomGifUrl() : addFavoriteGif()
      }
    >
      <span role="img" aria-label={category}>
        {category === "random" ? "🎲" : "⭐️"}
      </span>
    </button>
  );
};

export default Button