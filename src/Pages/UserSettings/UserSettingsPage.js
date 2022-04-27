import Paper from "../../Components/Global/Paper";
import "./Styles/UserSettings.css";
import "../../Components/Global/Styles/ImageBox.css";
import ImageBox from "../../Components/Global/ImageBox";
import Title from "../../Components/Global/Title";
import InputField from "../../Components/Global/InputField";
import Image from "../../Components/Global/Image";
import Button from "../../Components/Global/Button";
import SymbolButton from "../../Components/Global/SymbolButton";
import { React, useState } from "react";

const UserSettingsPage = () => {
  const [firstName, setFirstName] = useState("Mia");
  const [lastName, setLastName] = useState("Dong");
  const [studentId, setStudentId] = useState("s205353");
  const [study, setStudy] = useState("BEng IT and Economics");

  const [editState, setEditState] = useState(false);

  return (
    <>
      <Title title="My Settings" />
      <div className="rows alignCenter">
        <div>
        <Paper>
          <Image
            imageSrc="https://firebasestorage.googleapis.com/v0/b/dtustudenthub.appspot.com/o/dtu.jpg?alt=media&token=21b1f706-623a-4ef2-911c-2f82a34a168b"
            imageWidth="100%"
            imageHeight="100%"
          />
        </Paper>
        </div>
       
        <Paper>
            <div>
              <div className="alignCenter">
                <ImageBox imageSrc="https://firebasestorage.googleapis.com/v0/b/dtustudenthub.appspot.com/o/miadong.jpg?alt=media&token=b8a1d722-999a-47ce-894e-ce12fc12594a" />
              </div>
              <div className="centerItems">
                {!editState && (
                  <>
                    <h2>
                      {" "}
                      {firstName} {lastName}{" "}
                    </h2>
                    <h3> {study} </h3>
                    <h3>{studentId}</h3>
                    <div className="alignCenter">
                      <SymbolButton
                        symbol="✏️"
                        onClick={() => setEditState(true)}
                      />
                    </div>
                  </>
                )}
                {editState && (
                  <>
                    <InputField
                      onChange={(e) => setFirstName(e.target.value)}
                      inputLabel="First Name"
                    />
                    <InputField
                      onChange={(e) => setLastName(e.target.value)}
                      inputLabel="Last Name"
                    />
                    <InputField
                      onChange={(e) => setStudentId(e.target.value)}
                      inputLabel="Student ID"
                    />
                    <InputField
                      onChange={(e) => setStudy(e.target.value)}
                      inputLabel="Study Field"
                    />
                    <Button
                      onClick={() => setEditState(false)}
                      buttonText="Save changes"
                    />
                  </>
                )}
              </div>
            </div>
          </Paper>
      </div>
    </>
  );
};

export default UserSettingsPage;
