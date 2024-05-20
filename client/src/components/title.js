

const Title = ({ display, onClick }) => {

    return (
        <div id="TITLE" className={` ${display ? ('transition-title') : ('')}`} onClick={onClick}>
          <h1>TheDailyJoke</h1>
        </div> 
        
    );
}

export default Title;