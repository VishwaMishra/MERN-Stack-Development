import React from "react";
//import Profile from "./profile";
const Profile = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          margin: "18px 0px",
          borderBottom: "1px solid grey",
        }}
      >
        <div>
          <img
            style={{ width: "160px", height: "160px", borderRadius: "80px" }}
            src="https://get.pxhere.com/photo/man-person-people-white-boy-cute-male-portrait-young-professional-profession-lifestyle-smiling-smile-cheerful-fun-happy-happiness-glasses-handsome-865531.jpg"
          />
        </div>
        <div>
          <h4>Vishwa</h4>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "108%",
            }}
          >
            <h6>40 posts</h6>
            <h6>20 followers</h6>
            <h6>50 following</h6>
          </div>
        </div>
      </div>
      <div className="gallery">
        <img
          clasName="items"
          src="https://get.pxhere.com/photo/man-person-people-white-boy-cute-male-portrait-young-professional-profession-lifestyle-smiling-smile-cheerful-fun-happy-happiness-glasses-handsome-865531.jpg"
        />
        <img
          clasName="items"
          src="https://get.pxhere.com/photo/man-person-people-white-boy-cute-male-portrait-young-professional-profession-lifestyle-smiling-smile-cheerful-fun-happy-happiness-glasses-handsome-865531.jpg"
        />
        <img
          clasName="items"
          src="https://get.pxhere.com/photo/man-person-people-white-boy-cute-male-portrait-young-professional-profession-lifestyle-smiling-smile-cheerful-fun-happy-happiness-glasses-handsome-865531.jpg"
        />
        <img
          clasName="items"
          src="https://get.pxhere.com/photo/man-person-people-white-boy-cute-male-portrait-young-professional-profession-lifestyle-smiling-smile-cheerful-fun-happy-happiness-glasses-handsome-865531.jpg"
        />
      </div>
    </div>
  );
};

export default Profile;
