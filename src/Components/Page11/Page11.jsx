import React from 'react'
import style from "./Page11style.module.css"

const FaqsArr = [
    {
        head: "What is a Hackathon?",
        text: "I2C2 is a Hackathon where students can come together to brainstorm and develop ideas to tackle significant issues. The format is similar to a workshop and encourages the use of design thinking and collaborative problem-solving techniques. Participants will work independently and in teams to generate innovative solutions."
    },
    {
        head: "Who can participate?",
        text: "Everyone is welcome to participate, be it, students, professionals, or aliens from a different planet!"
    },
    {
        head: "Are there any fees for I2C2?",
        text: "No. You are not required to make any payments to anyone. It is entirely free to all."
    },
    {
        head: "Can we form a team?",
        text: "Yes, you can participate in a team or solo. Participants may form teams of upto 4 members. Each participant must belong to a single team and submit a single project."
    },
    {
        head: "Can we work on old or ongoing projects?",
        text: "Yes. You can bring your old projects, but you will be judged on the features you add during the hackathon."
    },
    {
        head: "How do I know my registration is confirmed and when to start the development phase?",
        text: "The organizing team will approve and confirm your participation. Shortlisted teams will receive a confirmation email and it will reflect on the user dashboard."
    },
    {
        head: "Have more questions?",
        text: "Join our Discord Community Get in touch with a bigger community and ask any further queries you may have. Looking forward to welcoming you."
    },


]

const Page11 = () => {
    return (
        <div className={`${style.page11Div}`}>
            <div className={`${style.page11DivNext}`}>
                <div className={`${style.page11HDiv}`}><h1>Frequently Asked Questions</h1></div>
                <div className={`${style.page11DivAllAccr}`}>
                    {FaqsArr.map((i)=>{
                        return <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            {i.head}
                        </div>
                        <div className="collapse-content">
                            <p>{i.text}</p>
                        </div>
                    </div>
                    })}
                    
                    
                </div>
            </div>
        </div>
    )
}

export default Page11