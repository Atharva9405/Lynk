import { useAppStore } from "@/store"
import { useState } from "react";

const Profile = () => {
  const {userInfo} = useAppStore();
  const [firstName,setFirstName] = useState("")
  return (
    <div>
      Profile
      <div>Email:{userInfo.id}</div>
    </div>
  )
}

export default Profile
