import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getUserInfo } from "../../api";

import defaultAvatar from "../../assets/images/avatar.png";

export default function ResultItem({ item }) {
  const dispatch = useDispatch();
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

        <Link
          to={`user/${item.login}`}
          className="text-link"
          onClick={() => {
            getUserInfo(item.login).then((_user) => {
              console.log("user ", _user);
              dispatch({ type: "SELECT_USER", payload: _user });
            });
          }}
        >
          {item.login}
        </Link>
      </div>
    </section>
  );
}
