import './Styles/Title.css'
const Title = (props) => {
    return (
        <div>
        <h1 className="titleTextCss">{props.title}</h1>
        <h3>{props.subtitle}</h3>
      </div>
     );
   };
   export default Title;
   