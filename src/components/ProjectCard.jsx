const cardDetails = [
    {
        image :"shanks1.jpg",
        title:"Portfolio",
        skills:["HTML","CSS","JavaScript","React"],
    },
    {
        image :"shanks1.jpg",
        title:"Portfolio",
        skills:["HTML","CSS","JavaScript","React"],
    },
    {
        image :"shanks1.jpg",
        title:"Portfolio",
        skills:["HTML","CSS","JavaScript","React"],
    },
    {
        image :"shanks1.jpg",
        title:"Portfolio",
        skills:["HTML","CSS","JavaScript","React"],
    },
    {
        image :"shanks1.jpg",
        title:"Portfolio",
        skills:["HTML","CSS","JavaScript","React"],
    },
]
function UserCard(props){
    return <div className="project-container">
            <div className="project-card">
                <div className="project-img">
                    <img src={props.image} />
                </div>
                <div className="project-title">
                    <h3>{props.title}</h3></div>
                <div className="project-blog"><a href="#">Read more</a></div>
                <div className="project-tools">
                    <ul>
                        {props.skills.map((skill,index)=>(
                            <li key={index}>{skill}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
}

const ProjectCard = (props) => {
  return (
    <>
    {
        cardDetails.map((user,index) => (
            <UserCard key={index}
            image={user.image}
            title={user.title}
            skills={user.skills} />
    
        ))

    }
    </>
  )
}

export default ProjectCard