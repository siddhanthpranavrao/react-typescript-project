import ChangeProfile from "../components/ChangeProfile"

type ProfileProps = {
    username: string,
    updateUsername: (newUsername: string) => void
}

export default function Profile({ username, updateUsername }: ProfileProps) {
    return <div>PROFILE! {username} <ChangeProfile updateUsername={updateUsername} /></div>
}

