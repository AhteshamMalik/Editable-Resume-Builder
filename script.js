var _a;
// Function to generate the resume
function generateResume(data) {
    return "\n        <div>\n            <h2 contenteditable=\"true\" class=\"editable\" data-field=\"name\">".concat(data.name, "</h2>\n            <p><strong>Email:</strong> <span contenteditable=\"true\" class=\"editable\" data-field=\"email\">").concat(data.email, "</span></p>\n            <p><strong>Phone:</strong> <span contenteditable=\"true\" class=\"editable\" data-field=\"phone\">").concat(data.phone, "</span></p>\n            <h3>Education</h3>\n            <p contenteditable=\"true\" class=\"editable\" data-field=\"education\">").concat(data.education, "</p>\n            <h3>Work Experience</h3>\n            <p contenteditable=\"true\" class=\"editable\" data-field=\"experience\">").concat(data.experience, "</p>\n            <h3>Skills</h3>\n            <p contenteditable=\"true\" class=\"editable\" data-field=\"skills\">").concat(data.skills, "</p>\n        </div>\n    ");
}
// Function to update the resume data when editing is done
function updateResumeData(field, value, data) {
    switch (field) {
        case 'name':
            data.name = value;
            break;
        case 'email':
            data.email = value;
            break;
        case 'phone':
            data.phone = value;
            break;
        case 'education':
            data.education = value;
            break;
        case 'experience':
            data.experience = value;
            break;
        case 'skills':
            data.skills = value;
            break;
    }
}
// Handling form submission
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    // Capture form data
    var formData = new FormData(event.target);
    var data = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        education: formData.get('education'),
        experience: formData.get('experience'),
        skills: formData.get('skills'),
    };
    // Generate the resume
    var resumeOutput = document.getElementById('resumeOutput');
    if (resumeOutput) {
        resumeOutput.innerHTML = generateResume(data);
        // Add event listeners to editable elements
        var editableElements = resumeOutput.querySelectorAll('.editable');
        editableElements.forEach(function (element) {
            element.addEventListener('blur', function (event) {
                var target = event.target;
                var field = target.getAttribute('data-field');
                if (field) {
                    var value = target.innerText;
                    updateResumeData(field, value, data);
                }
            });
        });
    }
});
