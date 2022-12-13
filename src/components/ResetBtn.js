//react libraries
import PropTypes from 'prop-types';

//styles
import '../styles/components/ResetBtn.scss'


function ResetBtn({handleResetBtn}) {
  const handleReset = (ev) => {
      ev.preventDefault();
      handleResetBtn();
  }
return (
  <button type="reset" className='form__reset' onClick={handleReset}>Reset</button>
  );
}

ResetBtn.propTypes = {
  handleResetBtn: PropTypes.func.isRequired
};

export default ResetBtn;