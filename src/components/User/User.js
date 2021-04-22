import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {updateUser} from '../../redux/userReducer'
import axios from 'axios'
import './User.scss'

const User = (props) => {
  const {user} = props
  const uploadedImage = React.useRef(null);
  const imageUploader = React.useRef(null);
  const [editView, setEditView] = useState(false)
  const [userInfo, setUserInfo] = useState({
    first_name: user?.first_name,
    last_name: user?.last_name,
    email: user?.email, 
    username: user?.username
  })

  const handleImageUpload = e => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;
      reader.onload = e => {
        current.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    if(user) {
      setUserInfo({
        first_name: user?.first_name,
        last_name: user?.last_name,
        email: user?.email, 
        username: user?.username
      })
    }
  }, [user])

  const handleChange = (e) => {
    setUserInfo({...userInfo, [e.target.name]:e.target.value})
  }

  const handleSubmit = (e) => {
    const {updateUser} = props
    e.preventDefault()
    setEditView(!editView)
    console.log(userInfo)
    axios.put('/auth/userUpdate', userInfo)
      .then(res => {
        console.log('Hey this is the handleSubmit',res.data)
        updateUser(res.data)
      })
      .catch(err => console.log(err))
  }

  console.log(props)

  return (
    <div className="user-container" >
      <div className="portfoliocard">
        <div className="coverphoto">
          <input type="file" accept="image/*" onChange={handleImageUpload} ref={imageUploader}/>
        </div>
        <div className="profile_picture">
          <div className="div-img" onClick={() => imageUploader.current.click()}>
            <img ref={uploadedImage} className="profile_img" alt="user-profile-pic"/>
          </div>
        </div>
        <div className="left_col">
          <div className="user_info">
            <h1>User Profile</h1>
            <button onClick={() => setEditView(!editView)}>Edit Info</button>
          </div>
        </div>
        <div className="right_col">
          <h2 className="name">{user?.first_name} {user?.last_name}</h2>
          <ul className="contact_information">
            {
              editView ? (
                <form onSubmit={handleSubmit}>
                  <input name="first_name" placeholder={user?.first_name} onChange={handleChange}></input>
                  <input name="last_name" placeholder={user?.last_name} onChange={handleChange}></input>
                  <input name="email" placeholder={user?.email} onChange={handleChange}></input>
                  <input name="username" placeholder={user?.username} onChange={handleChange}></input>
                  <button className="submit" type="submit">Submit</button>
                </form>
              ) : (
                null
              )
            }
            {
              editView ? (
                null
              ) : (
                <>
                  <li className="mail">{user?.email}</li>
                  <li className="username">{user?.username}</li>
                </>
              )
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (stateRedux) => {
  return {
    user: stateRedux.userReducer.user
  }
}

export default connect(mapStateToProps, {updateUser})(User)
