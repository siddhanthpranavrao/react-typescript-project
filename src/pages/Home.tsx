type HomeProps = {
    username: string
}

export default function Home({ username }: HomeProps) {
    return <h1>HOME! {username}</h1>
}