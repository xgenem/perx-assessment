import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import HeaderUser from "../Header/headerUser";
import { getUserRepos, getUserOrgs, getUserInfo } from "../../api";
import { useSelector } from "react-redux";

export default function User() {
  const { username } = useParams();
  const user = useSelector((state) => state.users.selectedUser);
  const [profile, setProfile] = useState(user);
  const [repos, setRepos] = useState([]);
  const [orgs, setOrgs] = useState([]);

  useEffect(() => {
    getUserInfo(username).then((_user) => {
      console.log("user ", _user);
      setProfile(_user);
    });
    getUserRepos(username).then((_repos) => {
      console.log("repos ", _repos);
      setRepos(_repos);
    });

    getUserOrgs(username).then((_orgs) => {
      console.log("orgs", _orgs);
      setOrgs(_orgs);
    });
  }, [username]);

  return (
    <>
      <HeaderUser title="" />
      <div className="user">
        <section>
          <img src={profile?.avatar_url} alt={`${username}'s avatar `} />

          <div className="name">
            <p>{profile?.name}</p>
            <span>
              <a href={profile?.html_url} target="_blank" rel="noreferrer">
                {username}
              </a>
            </span>
          </div>
        </section>
        <section>
          <div className="repo-section">
            <h3>Repositories</h3>
            <ul>
              {repos.map((repo) => {
                return (
                  <li key={repo.id}>
                    <a href={repo.html_url} target="_blank" rel="noreferrer">
                      {repo.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="repo-section">
            <h3>Organizations</h3>
            <ul>
              {orgs.map((org) => {
                let org_url = org.url.replace("api", "www");
                org_url = org_url.replace("orgs/", "");
                return (
                  <li key={org.id}>
                    <a href={org_url} target="_blank" rel="noreferrer">
                      {org.login}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}
