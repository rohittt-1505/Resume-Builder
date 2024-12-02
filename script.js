// Global variable to hold the generated PDF instance
let pdfDoc = null;

// Function to generate the resume as a PDF
document.getElementById("generateBtn").addEventListener("click", function () {
    const { jsPDF } = window.jspdf; // Get jsPDF instance
    const doc = new jsPDF();

    // Fetch user input
    const fullName = document.getElementById("fullName").value || "N/A";
    const email = document.getElementById("email").value || "N/A";
    const phone = document.getElementById("phone").value || "N/A";
    const education = document.getElementById("education").value || "N/A";
    const school = document.getElementById("school").value || "N/A";
    const workExperience = document.getElementById("workExperience").value || "N/A";
    const skills = document.getElementById("skills").value || "N/A";

    // Add content to the PDF
    doc.setFontSize(16);
    doc.text("Resume", 10, 10);

    doc.setFontSize(12);
    doc.text("Full Name: " + fullName, 10, 20);
    doc.text("Email: " + email, 10, 30);
    doc.text("Phone: " + phone, 10, 40);
    doc.text("Education: " + education, 10, 50);
    doc.text("University/College: " + school, 10, 60);
    doc.text("Work Experience: ", 10, 70);
    doc.text(workExperience, 10, 80, { maxWidth: 180 });
    doc.text("Skills: " + skills, 10, 100);

    // Save the generated PDF in the global variable
    pdfDoc = doc;

    alert("Resume generated successfully!");
});

// Function to preview the PDF in a new tab
document.getElementById("previewBtn").addEventListener("click", function () {
    if (!pdfDoc) {
        alert("Please generate the resume first!");
        return;
    }

    // Open PDF in a new tab
    const pdfBlob = pdfDoc.output("blob");
    const url = URL.createObjectURL(pdfBlob);
    window.open(url, "_blank");
});

// Function to download the PDF
document.getElementById("downloadBtn").addEventListener("click", function () {
    if (!pdfDoc) {
        alert("Please generate the resume first!");
        return;
    }

    // Trigger the download
    pdfDoc.save("Resume.pdf");
});
