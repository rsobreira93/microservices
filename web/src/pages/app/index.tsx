import {  useUser, withPageAuthRequired } from "@auth0/nextjs-auth0"

export default function Home(){

    const {user} = useUser();
    console.log(user);
    return (
        <div>
            <h1>Hello world</h1>
            <pre>{JSON.stringify(user, null, 2)}</pre>
        </div>
    )
}

export const getServerSideProps = withPageAuthRequired();