import Student from "../Student/index.jsx";

const Students = ({students}) => {

    return (
        <>
            {
                students.map((student, index) => {
                    return (
                        <Student student={student} key={`${student.name}-${index}`} />
                    )
                })
            }
        </>
    )
}

export default Students