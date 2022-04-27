import './Styles/ImageBox.css';

const Image = (props) => {
    return (
      <>
          <div className="regularImage">
          <img
          src={props.imageSrc} 
          alt="Sorry! An internal server error occured"
          width="300"
          height="300"
           />
          </div>
      </>
    );
  };
  export default Image;
  