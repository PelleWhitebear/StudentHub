import Paper from "../../components/Global/Paper";
import "./Styles/UserSettings.css";
import "../../components/Global/Styles/ImageBox.css";
import ImageBox from "../../components/Global/ImageBox";
import Title from "../../components/Global/Title";
import InputField from "../../components/Global/InputField";
import Image from "../../components/Global/Image";
import Button from "../../components/Global/Button";
import SymbolButton from "../../components/Global/SymbolButton";
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
                    <InputField
                    value={firstName}
                    disabled="true"
                      inputLabel="First Name"
                    />
                    <InputField
                    value={lastName}
                    disabled="true"
                      inputLabel="Last Name"
                    />
                    <InputField
                    value={studentId}
                    disabled="true"
                      inputLabel="Student ID"
                    />
                    <InputField
                    value={study}
                    disabled="true"
                      inputLabel="Study Field"
                    />
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
                    value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      inputLabel="First Name"
                    />
                    <InputField
                    value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      inputLabel="Last Name"
                    />
                    <InputField
                    value={studentId}
                      onChange={(e) => setStudentId(e.target.value)}
                      inputLabel="Student ID"
                    />
                    <InputField
                    value={study}
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
