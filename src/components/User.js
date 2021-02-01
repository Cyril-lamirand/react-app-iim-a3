const user = {
    firstname: 'Cyril',
    lastname: 'Lamirand'
}

function FormatName(user) {
    return user.firstname + ' ' + user.lastname
}

const JswExample = () => {
    return(
        <>
            <p>My name is {FormatName(user)} !</p>
        </>
    )
}

export default JswExample