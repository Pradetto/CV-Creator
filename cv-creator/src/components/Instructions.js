const Instructions = () => {
  return (
    <div className="instructions-container">
      <h2 className="instructions-header">Updating Sidebar:</h2>
      <p className="instructions-para">
        The blue sidebar has 4 sections that can be individually updated. To
        update this section you can <span className="bold">HOVER</span> over the
        section headers i.e. Technical Skills. This will pop up an
        <span className="bold"> EDIT</span> button. Here you can enter
        additional resume information. To <span className="bold">DELETE </span>
        click on the entered information and it will be removed.
      </p>
      <h2 className="instructions-header">Updating Main Content:</h2>
      <p className="instructions-para">
        The Main Content has 3 sections that can be individually updated. To
        update this section you can <span className="bold">HOVER</span> over the
        section headers i.e. Projects. This will pop up an
        <span className="bold"> EDIT</span> button. Here you can enter
        additional resume information. There are
        <span className="bold"> TWO DELETE</span> options in the main content.
        To
        <span className="bold"> DELETE BULLET POINT</span> click on the entered
        information and it will be removed. To
        <span className="bold"> DELETE PROJECT OR WORK</span> click on the
        project or company name. This will delete the entire company or project
        along with it's bullet points.
      </p>
    </div>
  );
};

export default Instructions;
