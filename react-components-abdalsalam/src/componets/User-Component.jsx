function User({ name, email, role }) {
  return (
    <div>
      <h3>{name}</h3>
      <h3>{email}</h3>
      <h3>{role}</h3>
    </div>
  );
}

export default User;
