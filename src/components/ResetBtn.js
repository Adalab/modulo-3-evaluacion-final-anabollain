//styles
import '../styles/components/ResetBtn.scss'


function ResetBtn(props) {
  const handleReset = (ev) => {
      ev.preventDefault();
      props.handleResetBtn();
  }
return (
  <button type="reset" className='form__reset' onClick={handleReset}>Reset</button>
  );
}


export default ResetBtn;