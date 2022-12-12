function ResetBtn(props) {
  const handleReset = (ev) => {
      ev.preventDefault();
      props.handleResetBtn();
  }
return (
  <button type="reset" onClick={handleReset}>Reset</button>
  );
}


export default ResetBtn;