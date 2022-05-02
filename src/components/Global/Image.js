import './Styles/ImageBox.css';

const Image = (props) => {
    return (
      <>
          <div className="alignVertically">
          <img className="regularImage"
          src={props.imageSrc}
          alt="Sorry! An internal server error occured"
          width={props.imageWidth}
          height={props.imageHeight}
           />
          </div>
      </>
    );
  };
  export default Image;
  