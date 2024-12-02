// Initialize EmailJS (Replace YOUR_USER_ID with your EmailJS User ID)
emailjs.init("rohitrathod2815@gmail.com");

function generateAndSendResume() {
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const education = document.getElementById("education").value;
    const school = document.getElementById("school").value;
    const workExperience = document.getElementById("workExperience").value;
    const skills = document.getElementById("skills").value;

    // Validate inputs
    if (!fullName || !email || !phone) {
        alert("Please fill out all required fields (Name, Email, and Phone).");
        return;
    }

    // Generate PDF using jsPDF
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF();

    pdf.setFontSize(16);
    pdf.text("Resume", 105, 10, { align: "center" });
    pdf.setFontSize(12);
    pdf.text(`Name: ${fullName}`, 10, 20);
    pdf.text(`Email: ${email}`, 10, 30);
    pdf.text(`Phone: ${phone}`, 10, 40);
    pdf.text(`Education: ${education || "N/A"}`, 10, 50);
    pdf.text(`University/College: ${school || "N/A"}`, 10, 60);
    pdf.text("Work Experience:", 10, 70);
    pdf.text(workExperience || "N/A", 10, 80);
    pdf.text("Skills:", 10, 100);
    pdf.text(skills || "N/A", 10, 110);

    // Convert the PDF to base64
    const pdfBase64 = pdf.output("datauristring").split(",")[1];

    // Prepare EmailJS parameters
    const emailParams = {
        from_name: fullName,
        to_name: fullName,
        to_email: email,
        message: "Please find your resume attached.",
        attachment: pdfBase64,
    };

    // Send email with EmailJS
    emailjs
        .send("service_qc4k4xu", "template_f3kr9s8", emailParams)
        .then(
            function () {
                alert("Resume sent successfully!");
            },
            function (error) {
                console.error("Error sending email:", error);
                alert("Failed to send the resume. Please try again.");
            }
        );
}
