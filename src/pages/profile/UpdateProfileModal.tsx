import "./updateProfileModal.css";
import { useState } from "react";

const user = {
  username: "Youssef",
  bio: "hello my name is youssef",
  password: "",
};

export interface Props {
  setUpdateProfile: (value: React.SetStateAction<boolean>) => void;
}

const UpdateProfileModal = ({ setUpdateProfile }: Props) => {
  const [username, setUsername] = useState<string>(user.username || "");
  const [bio, setBio] = useState<string>(user.bio || "");
  const [password, setPassword] = useState<string>("");

  // From Submit Handler
  const formSubmitHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const updatedUser = { username, bio, password };
    if (password.trim() !== "") {
      updatedUser.password = password;
    }

    console.log(updatedUser);
  };

  return (
    <div className="update-profile">
      <form onSubmit={formSubmitHandler} className="update-profile-form">
        <abbr title="close">
          <i
            onClick={() => setUpdateProfile(false)}
            className="bi bi-x-circle-fill update-profile-form-close"
          ></i>
        </abbr>
        <h1 className="update-profile-title">Update Your Profile</h1>
        <input
          onChange={(e) => setUsername(e.target.value)}
          value={username}
          type="text"
          className="update-profile-input"
          placeholder="Username"
        />
        <input
          onChange={(e) => setBio(e.target.value)}
          value={bio}
          type="text"
          className="update-profile-input"
          placeholder="Bio"
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password"
          className="update-profile-input"
          placeholder="Password"
        />
        <button type="submit" className="update-profile-btn">
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default UpdateProfileModal;
