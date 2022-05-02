const ImageBox = (props) => {
  return (
    <>
     <br />
        <div className="imageBox">
        <img className="imageSize"
        src={props.imageSrc} 
        alt="Sorry! An internal server error occured"
         />
        </div>
        <br />
       
    </>
  );
};
export default ImageBox;
