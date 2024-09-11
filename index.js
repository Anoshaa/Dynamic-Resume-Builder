var _a;
// Main function to capture form data and generate resume
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (e) {
    e.preventDefault();
    // Capture Personal Information
    var personalInfo = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        address: document.getElementById('address').value,
        website: document.getElementById('website').value
    };
    // Capture Education Information
    var education = {
        institution: document.getElementById('institution').value,
        degree: document.getElementById('degree').value,
        graduationYear: parseInt(document.getElementById('graduation').value)
    };
    // Capture Work Experience Information
    var workExperience = {
        jobTitle: document.getElementById('jobTitle').value,
        company: document.getElementById('company').value,
        startDate: document.getElementById('startDate').value,
        endDate: document.getElementById('endDate').value,
        description: document.getElementById('jobDescription').value
    };
    // Capture Skills
    var skills = {
        skills: document.getElementById('skills').value.split(',')
    };
    // Generate Resume
    generateResume(personalInfo, education, workExperience, skills);
});
// Function to dynamically generate resume
function generateResume(personalInfo, education, workExperience, skills) {
    var resumeContainer = document.getElementById('resumeContainer');
    resumeContainer.innerHTML = "\n        <h2>Resume</h2>\n        <h3>".concat(personalInfo.name, "</h3>\n        <p>Email: ").concat(personalInfo.email, "</p>\n        ").concat(personalInfo.phone ? "<p>Phone: ".concat(personalInfo.phone, "</p>") : '', "\n        ").concat(personalInfo.address ? "<p>Address: ".concat(personalInfo.address, "</p>") : '', "\n        ").concat(personalInfo.website ? "<p>Website: ".concat(personalInfo.website, "</p>") : '', "\n        \n        <h3>Education</h3>\n        <p>").concat(education.degree, " from ").concat(education.institution, " (Graduation: ").concat(education.graduationYear, ")</p>\n\n        <h3>Work Experience</h3>\n        <p><strong>").concat(workExperience.jobTitle, "</strong> at ").concat(workExperience.company, "</p>\n        <p>").concat(workExperience.startDate, " to ").concat(workExperience.endDate, "</p>\n        <p>").concat(workExperience.description, "</p>\n\n        <h3>Skills</h3>\n        <p>").concat(skills.skills.join(', '), "</p>\n    ");
}
