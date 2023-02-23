import React from "react";

function MemberProfile({ name, role, description }) {
  return (
    <div className="member-profile">
      <h2>{name}</h2>
      <p className="role">{role}</p>
      <p className="description">{description}</p>
    </div>
  );
}
export default MemberProfile;
