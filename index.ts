// Define interfaces to structure the data
interface PersonalInfo {
    name: string;
    email: string;
    phone?: string;
    address?: string;
    website?: string;
}

interface Education {
    institution: string;
    degree: string;
    graduationYear: number;
}

interface WorkExperience {
    jobTitle: string;
    company: string;
    startDate: string;
    endDate: string;
    description: string;
}

interface Skills {
    skills: string[];
}

// Main function to capture form data and generate resume
document.getElementById('resumeForm')?.addEventListener('submit', (e) => {
    e.preventDefault();

    // Capture Personal Information
    const personalInfo: PersonalInfo = {
        name: (document.getElementById('name') as HTMLInputElement).value,
        email: (document.getElementById('email') as HTMLInputElement).value,
        phone: (document.getElementById('phone') as HTMLInputElement).value,
        address: (document.getElementById('address') as HTMLInputElement).value,
        website: (document.getElementById('website') as HTMLInputElement).value
    };

    // Capture Education Information
    const education: Education = {
        institution: (document.getElementById('institution') as HTMLInputElement).value,
        degree: (document.getElementById('degree') as HTMLInputElement).value,
        graduationYear: parseInt((document.getElementById('graduation') as HTMLInputElement).value)
    };

    // Capture Work Experience Information
    const workExperience: WorkExperience = {
        jobTitle: (document.getElementById('jobTitle') as HTMLInputElement).value,
        company: (document.getElementById('company') as HTMLInputElement).value,
        startDate: (document.getElementById('startDate') as HTMLInputElement).value,
        endDate: (document.getElementById('endDate') as HTMLInputElement).value,
        description: (document.getElementById('jobDescription') as HTMLTextAreaElement).value
    };

    // Capture Skills
    const skills: Skills = {
        skills: (document.getElementById('skills') as HTMLInputElement).value.split(',')
    };

    // Generate Resume
    generateResume(personalInfo, education, workExperience, skills);
});

// Function to dynamically generate resume
function generateResume(personalInfo: PersonalInfo, education: Education, workExperience: WorkExperience, skills: Skills) {
    const resumeContainer = document.getElementById('resumeContainer')!;
    
    resumeContainer.innerHTML = `
        <h2>Resume</h2>
        <h3>${personalInfo.name}</h3>
        <p>Email: ${personalInfo.email}</p>
        ${personalInfo.phone ? `<p>Phone: ${personalInfo.phone}</p>` : ''}
        ${personalInfo.address ? `<p>Address: ${personalInfo.address}</p>` : ''}
        ${personalInfo.website ? `<p>Website: ${personalInfo.website}</p>` : ''}
        
        <h3>Education</h3>
        <p>${education.degree} from ${education.institution} (Graduation: ${education.graduationYear})</p>

        <h3>Work Experience</h3>
        <p><strong>${workExperience.jobTitle}</strong> at ${workExperience.company}</p>
        <p>${workExperience.startDate} to ${workExperience.endDate}</p>
        <p>${workExperience.description}</p>

        <h3>Skills</h3>
        <p>${skills.skills.join(', ')}</p>
    `;
}
