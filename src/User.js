import React from 'react';

function User({ user }) {
  // user가 없다면 렌더링을 하지 않도록 return null을 해서 에러 발생 방지
  // if (!user) return null;

  return (
    <div>
      <dibv>
        <b>ID</b>: {user.id}
      </dibv>
      <div>
        <b>Username</b>: {user.username}
      </div>
    </div>
  );
}

export default User;
