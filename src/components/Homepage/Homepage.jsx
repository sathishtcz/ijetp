import React from 'react'
import Home from '../../shared/components/Home/Home'

export default function Homepage() {

    const keywords = [
        "Educational Technology Integration", "Curriculum Design and Development", "Teaching and Learning Strategies",
        "Evaluation in Education", "Inclusive Education", "Professional Development",
        "Early Childhood Education", "Education Policy and Practice", "Student Well-being",
        "Educational Psychology", "STEM and STEAM Education", "Social Justice in Education",
        "Educational Leadership", "Online Learning", "Language and Literacy Education",
        "Qualitative Research", "Quantitative Methods", "Mixed Methods",
        "Action Research", "Case Study", "Ethnographic Methods",
        "Grounded Theory", "Experimental Design", "Narrative Inquiry",
        "Phenomenological Approach", "Survey Research", "Longitudinal Studies",
        "Participatory Research", "Design-Based Research", "Systematic Reviews",
        "AI Tools in Education", "Learning Through Games", "AI Tools in Education",
        "Education with Mobile Apps", "Virtual Reality in Learning", "Studying Student Data",
        "Mixing Classroom Teaching", "Online Tests", "Learning with Technology",
        "Helping Slow Learners with Tech", "Safe Use of Tech in Schools", "Student Behavior and Technology","Teacher Training with Online Tools", "Group Learning ", "New Ways of Teaching",
    ];

    // Split the keywords into three arrays of 15 each
    const firstRow = keywords.slice(0, 15);
    const secondRow = keywords.slice(15, 30);
    const thirdRow = keywords.slice(30, 45);


    return (
        <div>
            <Home keywords={keywords} firstRow={firstRow} secondRow={secondRow} thirdRow={thirdRow} />
        </div>
    )
}
