export const Application = () => {
  return (
    <>
      <h1>Job application form</h1>
      <h2>Section 1</h2>
      <p>All fields are mandatory</p>
      <span title="close">X</span>
      <img src="https://cdn.pixabay.com/photo/2016/10/21/15/59/sun-1758348_1280.jpg" alt="a form to fill" width={150} />
      <div data-testid="custom-element">Custom HTML Element</div>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input id="name" name="name" placeholder="fullname" value="beasky" />
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
