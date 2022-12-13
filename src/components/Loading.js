//styles
import '../styles/components/Loading.scss';


function Loading() {

  //RETURN
  return (
    <main className='mainload'>
      <div className="spinner-box">
        <div className="pulse-container">
          <div className="pulse-bubble pulse-bubble-1"></div>
          <div className="pulse-bubble pulse-bubble-2"></div>
          <div className="pulse-bubble pulse-bubble-3"></div>
        </div>
      </div>
    </main>
  );
}

export default Loading;