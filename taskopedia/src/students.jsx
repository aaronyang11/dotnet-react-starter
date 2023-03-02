function Students() {
    const fullName = 'Jin Yang';
    const programmingExp = 2;

    return (
        <div className="container p-4">
            <div className="row">Students Enrolled</div>
            <div className="row border">
                <div className="col-2">
                    <img src={`https://ui-avatars.com/api/?name=${fullName}`} className='w-100' alt="initials"></img>
                </div>
                <div className="col-10">
                    {fullName}
                    <br />
                    Coding Experience: {programmingExp} years
                </div>
            </div>
        </div>
    )
}

export default Students;