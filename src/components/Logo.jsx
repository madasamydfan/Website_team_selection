import profileImage from '../assets/profile.png'

function Logo() {
    return <div className="logo">
        <img src={profileImage} alt="logoImage" />
        <p>Logo</p>
    </div>
}

export default Logo