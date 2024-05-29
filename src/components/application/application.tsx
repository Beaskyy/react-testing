export const Application = () => {
  return (
    <>
    <h1>Job application form</h1>
    <h2>Section 1</h2>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" />
        </div>
        <div>
          <label htmlFor="bio">Bio</label>
          <input id="bio" name="bio" />
        </div>
        <input type="checkbox" /> I agree to the terms
        <button>Submit</button>
      </form>
    </>
  );
};
