import React from "react";

import defaultAvatar from "../../assets/images/avatar.png";

export default function ResultItem({ item }) {
  const avatar = item.avatar_url ? item.avatar_url : defaultAvatar;
  return (
    <section className="result">
      <div className="result-content">
        <img
          src={avatar}
          className="avatar"
          style={{ marginRight: 10 }}
          alt={`${item.login}'s avatar`}
        />

        <a href={`user/${item.login}`} className="text-link">
          {item.login}
        </a>
      </div>
    </section>
  );
}
