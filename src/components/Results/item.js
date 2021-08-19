import React from "react";

import defaultAvatar from "../../assets/images/avatar.png";

export default function ResultItem({ item }) {
  const avatar = item.avatar ? item.avatar : defaultAvatar;
  return (
    <section className="result">
      <div className="result-content">
        <img
          src={avatar}
          className="avatar"
          style={{ marginRight: 10 }}
          alt={`${item.name}'s avatar`}
        />

        <a href="/#" className="text-link">
          {item.name}
        </a>
      </div>
    </section>
  );
}
