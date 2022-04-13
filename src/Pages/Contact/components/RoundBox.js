import "../Styles/ContactPage.css";

const RoundBoxWithTitle = (props) => {

    function loadList() {
        if (props.data != null){
            const list = props.data.map((element) => (
                <li key={props.data.indexOf(element)}> {element} </li>
              ));
              return<ul>{list}</ul>;
        } else {
            return;
        }
      }

  return (
    <>
      <div className="content DEh3">
        <h1>{props.title}</h1>
        <h3>{props.subtitle}</h3>
      </div>
      <div className="DePageContent">
        <h3>{props.secondSubtitle}</h3>
        {loadList(props.data)}
        <p> {props.text} </p>
      </div>
    </>
  );
};
export default RoundBoxWithTitle;
