document.addEventListener("DOMContentLoaded", function () {
    const introBox = document.getElementById("intro-box");
    const overlayImage = document.querySelector(".overlay-image"); // Select the overlay image
    const mainContent = document.getElementById("main-content");
    const continueButton = document.getElementById("continue-button"); // The CONTINUE button

    // Show the intro box immediately when the page loads
    introBox.style.display = "block"; // Ensure the intro box is visible

    // Add a click event listener to the "CONTINUE" button to hide the intro box and show the main content
    continueButton.addEventListener("click", function() {
        introBox.style.display = "none"; // Hide the intro box when "CONTINUE" is clicked
        mainContent.style.display = "block"; // Show the main content
    });

    // Add a click event listener to the overlay image to show the intro box again
    overlayImage.addEventListener("click", function() {
        introBox.style.display = "block"; // Show the intro box when the overlay image is clicked
        mainContent.style.display = "none"; // Optionally hide the main content when the intro box appears again
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const boxes = document.querySelectorAll(".box");
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modal-title");
    const modalInfo = document.getElementById("modal-info");
    const closeButton = document.querySelector(".close-button");

   // Detailed information for each box
const boxDetails = {
    "Material Extrusion": `
        <div class="modal-text">
            <video controls width="65%" style="border-radius: 10px; margin-top: 10px;">
                <source src="Material-Extrusion.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        <img src="Material Extrusion.png" alt="Material Extrusion" class="modal-image-right"><br>
        <strong><span style="font-size: 24px; font-style: italic; text-decoration: underline;">Method</span></strong><br>
            <strong>1. Material Feeding:</strong> A thermoplastic filament or pellet is fed into a heated nozzle.<br>
            <strong>2. Material Melting:</strong> The material is heated above its melting point inside the nozzle.<br>
            <strong>3. Material Deposition:</strong> The molten material is extruded through the nozzle and deposited layer by layer on a build platform.<br>
            <strong>4. Layer Bonding:</strong> Successive layers are fused together either by cooling or partial remelting.<br>
            <strong>5. Object Completion:</strong> The completed part solidifies as it cools, forming a cohesive, three-dimensional object.
        </div>
        <p></P>
        <div class="modal-text-2">
        <strong><span style="font-size: 24px; font-style: italic; text-decoration: underline;">Technologies</span></strong><br>
        <ul style="list-style-type: square; font-size: 16px;">
            <li>FDM (Fused Deposition Modeling): Commonly used in desktop 3D printers with thermoplastics.</li>
            <li>FFF (Fused Filament Fabrication): Another name for FDM, often used interchangeably.</li>
        </ul>
        </div>
    `,
    "Binder Jetting": `
        <div class="modal-text">
            <video controls width="65%" style="border-radius: 10px; margin-top: 10px;">
                <source src="Binder-Jetting.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        <img src="Binder Jetting.png" alt="Material Extrusion" class="modal-image-right"><br>
        <strong><span style="font-size: 24px; font-style: italic; text-decoration: underline;">Method</span></strong><br>
            <strong>1. Powder Spreading:</strong> A thin layer of powder material (e.g., metal, sand, or ceramic) is spread across the build area.<br>
            <strong>2. Binder Deposition:</strong> A liquid binding agent is selectively jetted onto the powder to form the desired cross-section.<br>
            <strong>3. Layer Building:</strong> The build platform lowers, and a new layer of powder is spread on top.<br>
            <strong>4. Curing:</strong> Each layer's binder is cured to ensure stability during the build.<br>
            <strong>5. Post-Processing:</strong> The "green part" is cleaned of loose powder, and further processes like sintering or infiltration enhance strength.
        </div>
        <p></P>
        <div class="modal-text-2">
        <strong><span style="font-size: 24px; font-style: italic; text-decoration: underline;">Technologies</span></strong><br>
        <ul style="list-style-type: square; font-size: 16px;">
            <li>Sand casting molds.</li>
            <li>Metal parts (requiring sintering or infiltration post-processing).</li>
        </ul>
        </div>
    `,
    "Material Jetting": `
        <div class="modal-text">
            <video controls width="65%" style="border-radius: 10px; margin-top: 10px;">
                <source src="Material-Jetting.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        <img src="Material Jetting.png" alt="Material Extrusion" class="modal-image-right"><br>
        <strong><span style="font-size: 24px; font-style: italic; text-decoration: underline;">Method</span></strong><br>
            <strong>1. Droplet Ejection:</strong> Small droplets of a liquid photopolymer or wax are jetted through a nozzle onto the build platform.<br>
            <strong>2. Curing:</strong> UV light or heat immediately cures or solidifies the material after deposition.<br>
            <strong>3. Layer Building:</strong> Successive layers are jetted and cured to build the part.<br>
            <strong>4. Support Structures:</strong> Dissolvable or breakable supports are printed simultaneously for overhangs and complex geometries.<br>
            <strong>5. Post-Processing:</strong> The completed part undergoes cleaning and removal of support material.
        </div>
        <p></P>
        <div class="modal-text-2">
        <strong><span style="font-size: 24px; font-style: italic; text-decoration: underline;">Technologies</span></strong><br>
        <ul style="list-style-type: square; font-size: 16px;">
            <li>PolyJet: Produces multi-material, multi-color parts.</li>
            <li>Drop-on-Demand (DOD): High-precision 3D printing for casting patterns or prototypes.</li>
        </ul>
        </div>
    `,
    "Direct Energy Deposition": `
        <div class="modal-text">
            <video controls width="65%" style="border-radius: 10px; margin-top: 10px;">
                <source src="DED.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        <img src="DED.png" alt="Material Extrusion" class="modal-image-right"><br>
        <strong><span style="font-size: 24px; font-style: italic; text-decoration: underline;">Method</span></strong><br>
            <strong>1. Material Supply:</strong> Material is supplied as powder or wire and delivered to the focus of an energy source.<br>
            <strong>2. Energy Application:</strong> A high-energy beam (laser, electron beam, or arc) melts the material and substrate.<br>
            <strong>3. Material Deposition:</strong> The melted material is deposited layer by layer onto the build surface.<br>
            <strong>4. Layer Fusion:</strong> Layers are bonded by the energy source, forming a strong metallurgical connection.<br>
            <strong>5. Post-Processing:</strong> Machining, heat treatments, or surface finishing is applied for precision.
        </div>
        <p></P>
        <div class="modal-text-2">
        <strong><span style="font-size: 24px; font-style: italic; text-decoration: underline;">Technologies</span></strong><br>
        <ul style="list-style-type: square; font-size: 16px;">
            <li>LENS (Laser Engineered Net Shaping).</li>
            <li>EBAM (Electron Beam Additive Manufacturing).</li>
            <li>Often used for repairing or building large metal parts.</li>
        </ul>
        </div>
    `,
    "Powder Bed Fusion": `
        <div class="modal-text">
            <video controls width="65%" style="border-radius: 10px; margin-top: 10px;">
                <source src="Powder-Bed-Fusion.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        <img src="Powder Bed Fusion.png" alt="Material Extrusion" class="modal-image-right"><br>
        <strong><span style="font-size: 24px; font-style: italic; text-decoration: underline;">Method</span></strong><br>
            <strong>1. Powder Spreading:</strong> A fine layer of powder material is spread across the build platform.<br>
            <strong>2. Energy Application:</strong> A laser or electron beam selectively melts or fuses the powder particles in the desired pattern.<br>
            <strong>3. Layer Building:</strong> The build platform lowers, and new layers of powder are spread and fused.<br>
            <strong>4. Cooling:</strong> The entire build cools gradually to avoid thermal stresses or deformation.<br>
            <strong>5. Post-Processing:</strong> Loose powder is removed, and additional processes like heat treatment or machining enhance part properties.
        </div>
        <p></P>
        <div class="modal-text-2">
        <strong><span style="font-size: 24px; font-style: italic; text-decoration: underline;">Technologies</span></strong><br>
        <ul style="list-style-type: square; font-size: 16px;">
            <li>SLS (Selective Laser Sintering): For polymers.</li>
            <li>SLM (Selective Laser Melting) / DMLS (Direct Metal Laser Sintering): For metals.</li>
            <li>EBM (Electron Beam Melting): Metal powders melted with an electron beam.</li>
        </ul>
        </div>
    `,
    "VAT Photopolymerisation": `
        <div class="modal-text">
            <video controls width="65%" style="border-radius: 10px; margin-top: 10px;">
                <source src="VAT-Photopolymerisation.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        <img src="VAT Photopolymerisation.png" alt="Material Extrusion" class="modal-image-right"><br>
        <strong><span style="font-size: 24px; font-style: italic; text-decoration: underline;">Method</span></strong><br>
            <strong>1. Resin Preparation:</strong> A liquid photopolymer resin is poured into a vat.<br>
            <strong>2. Light Projection:</strong> A light source (laser or projector) selectively cures the resin layer by layer based on the design.<br>
            <strong>3. Layer Elevation:</strong> The build platform moves up or down to accommodate successive layers.<br>
            <strong>4. Re-coating:</strong> A blade or roller ensures a uniform layer of liquid resin between cured layers.<br>
            <strong>5. Post-Processing:</strong> The finished part is cleaned, UV-cured for full strength, and supports are removed.
        </div>
        <p></P>
        <div class="modal-text-2">
        <strong><span style="font-size: 24px; font-style: italic; text-decoration: underline;">Technologies</span></strong><br>
        <ul style="list-style-type: square; font-size: 16px;">
            <li>SLA (Stereolithography).</li>
            <li>DLP (Digital Light Processing).</li>
            <li>CDLP (Continuous Digital Light Processing): For faster printing.</li>
        </ul>
        </div>
    `,
    "Sheet Lamination": `
        <div class="modal-text">
        <video controls width="65%" style="border-radius: 10px; margin-top: 10px;">
                <source src="Sheet-Lamination.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        <img src="Sheet Lamination.png" alt="Material Extrusion" class="modal-image-right"><br>
        <strong><span style="font-size: 24px; font-style: italic; text-decoration: underline;">Method</span></strong><br>
            <strong>1. Sheet Placement:</strong> Sheets of material (paper, metal, or plastic) are placed on the build platform.<br>
            <strong>2. Adhesive Bonding:</strong> Layers are bonded together using an adhesive or ultrasonic welding.<br>
            <strong>3. Layer Cutting:</strong> A laser or blade cuts the sheet into the desired cross-sectional shape.<br>
            <strong>4. Layer Stacking:</strong> New sheets are added and bonded, creating a layered stack of material.<br>
            <strong>5. Post-Processing:</strong> Unbonded material is trimmed, and surface finishing is applied as needed.
        </div>
        <p></P>
        <div class="modal-text-2">
        <strong><span style="font-size: 24px; font-style: italic; text-decoration: underline;">Technologies</span></strong><br>
        <ul style="list-style-type: square; font-size: 16px;">
            <li>LOM (Laminated Object Manufacturing): Paper or polymer sheets.</li>
            <li>Ultrasonic Additive Manufacturing (UAM): Metal sheets bonded via ultrasonic energy.</li>
        </ul>
        </div>
    `,
};

    // Open modal on box click
    boxes.forEach(box => {
        box.addEventListener("click", () => {
            const boxTitle = box.getAttribute("data-title");
            modalTitle.textContent = boxTitle;
            modalInfo.innerHTML = boxDetails[boxTitle] || "Details unavailable.";

            modal.classList.add("visible");
        });
    });

    // Close modal when clicking close button
    closeButton.addEventListener("click", () => {
        modal.classList.remove("visible");
    });

    // Close modal when clicking outside modal content
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.remove("visible");
        }
    });
});

// Function to toggle sidebar visibility
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const isHidden = sidebar.style.left === '-200px' || sidebar.style.left === '';

    if (isHidden) {
        sidebar.style.left = '0'; // Show the sidebar
    } else {
        sidebar.style.left = '-200px'; // Hide the sidebar
    }
}

function navigateToStage(stageId) {
    // Scroll smoothly to the selected stage
    const target = document.getElementById(stageId);
    if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}



// Handle dropdown functionality
document.querySelectorAll('.dropdown-btn').forEach(button => {
    button.addEventListener('click', function () {
        const dropdown = this.parentElement;

        // Close any other open dropdowns
        document.querySelectorAll('.dropdown').forEach(otherDropdown => {
            if (otherDropdown !== dropdown) {
                otherDropdown.classList.remove('active');
            }
        });

        // Toggle 'active' class for the clicked dropdown
        dropdown.classList.toggle('active');
    });
});

let selectedOrder = [];
const correctOrder = [
    "Aerospace Components (High Precision, Complex Geometries)",
    "Medical Equipment (Customization and Precision)",
    "Prototyping for Consumer Electronics (Rapid Iteration and Low-Volume Production)",
    "Automotive Parts (Low-Volume Production, Non-Critical Components)"
];

let rankCounter = 1; // Track the rank for each click

function rankButton(button) {
    if (!button.classList.contains('clicked')) {
        // Assign the number to the button's text content dynamically
        button.textContent = `${rankCounter}. ` + button.textContent.replace(/^\d+\.\s*/, '');
        button.classList.add('clicked');
        selectedOrder.push(button.textContent.trim()); // Store the updated button text
        rankCounter++; // Increment the rank counter for the next button click
    }

    // Check if all buttons have been clicked
    if (selectedOrder.length === 4) {
        checkOrder();
    }
}

function checkOrder() {
    let resultText = 'The ranking is ';

    // Remove the rank number and check if the selected order matches the correct order
    const selectedOrderWithoutRanks = selectedOrder.map(item => item.replace(/^\d+\.\s*/, '').trim());

    const isCorrect = selectedOrderWithoutRanks.every((item, index) => item === correctOrder[index]);

    if (isCorrect) {
        resultText += 'correct!';
        document.getElementById('result').style.color = '#39FF14';
    } else {
        resultText += 'incorrect.';
        document.getElementById('result').style.color = 'red';
    }

    document.getElementById('result').textContent = resultText;

    // Reset after 3 seconds
    setTimeout(resetGame, 3000);
}

function resetGame() {
    // Reset all buttons
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => {
        button.textContent = button.textContent.replace(/^\d+\.\s*/, ''); // Remove the rank number
        button.classList.remove('clicked'); // Remove the clicked class
    });

    // Clear the result
    document.getElementById('result').textContent = '';

    // Reset the tracking variables
    selectedOrder = [];
    rankCounter = 1;
}

function checkAnswer1(button, answerText) {
    // The correct answer is "False"
    const correctAnswer = "False";
    
    // Get the answer div for displaying the answer
    const answerDiv = button.closest('.question').querySelector('.answer');
    answerDiv.textContent = `Answer: ${answerText}`;

    // Check which button was clicked and apply the correct styling
    if (button.textContent.trim() === correctAnswer) {
        // If the button labeled 'False' is clicked, it turns green, and 'True' turns red
        button.style.backgroundColor = 'green';
        button.closest('.question').querySelectorAll('.true-false-btn').forEach(btn => {
            if (btn !== button) {
                btn.style.backgroundColor = 'red'; // 'True' button turns red
            }
        });
    } else {
        // If the button labeled 'True' is clicked, it turns red, and 'False' turns green
        button.style.backgroundColor = 'red';
        button.closest('.question').querySelectorAll('.true-false-btn').forEach(btn => {
            if (btn.textContent.trim() === correctAnswer) {
                btn.style.backgroundColor = 'green'; // 'False' button turns green
            }
        });
    }

    disableButtons(button); // Disable all buttons after selection
}

// Disable buttons after answering
function disableButtons(button) {
    const buttons = button.closest('.question').querySelectorAll('.true-false-btn');
    buttons.forEach(btn => {
        btn.disabled = true; // Disable all buttons for this question after selection
    });
}


function checkAnswer2(button, answerText) {
    // The correct answer is "True"
    const correctAnswer = "True";
    
    // Get the answer div for displaying the answer
    const answerDiv = button.closest('.question').querySelector('.answer');
    answerDiv.textContent = `Answer: ${answerText}`;

    // Check which button was clicked and apply the correct styling
    if (button.textContent.trim() === correctAnswer) {
        // If the button labeled 'True' is clicked, it turns green, and 'False' turns red
        button.style.backgroundColor = 'green';
        button.closest('.question').querySelectorAll('.true-false-btn').forEach(btn => {
            if (btn !== button) {
                btn.style.backgroundColor = 'red'; // 'False' button turns red
            }
        });
    } else {
        // If the button labeled 'False' is clicked, it turns red, and 'True' turns green
        button.style.backgroundColor = 'red';
        button.closest('.question').querySelectorAll('.true-false-btn').forEach(btn => {
            if (btn.textContent.trim() === correctAnswer) {
                btn.style.backgroundColor = 'green'; // 'True' button turns green
            }
        });
    }

    disableButtons(button); // Disable all buttons after selection
}

// Disable buttons after answering
function disableButtons(button) {
    const buttons = button.closest('.question').querySelectorAll('.true-false-btn');
    buttons.forEach(btn => {
        btn.disabled = true; // Disable all buttons for this question after selection
    });
}


function checkAnswer3(button, answerText) {
    // The correct answer is "True"
    const correctAnswer = "True";
    
    // Get the answer div for displaying the answer
    const answerDiv = button.closest('.question').querySelector('.answer');
    answerDiv.textContent = `Answer: ${answerText}`;

    // Check which button was clicked and apply the correct styling
    if (button.textContent.trim() === correctAnswer) {
        // If the button labeled 'True' is clicked, it turns green, and 'False' turns red
        button.style.backgroundColor = 'green';
        button.closest('.question').querySelectorAll('.true-false-btn').forEach(btn => {
            if (btn !== button) {
                btn.style.backgroundColor = 'red'; // 'False' button turns red
            }
        });
    } else {
        // If the button labeled 'False' is clicked, it turns red, and 'True' turns green
        button.style.backgroundColor = 'red';
        button.closest('.question').querySelectorAll('.true-false-btn').forEach(btn => {
            if (btn.textContent.trim() === correctAnswer) {
                btn.style.backgroundColor = 'green'; // 'True' button turns green
            }
        });
    }

    disableButtons(button); // Disable all buttons after selection
}

// Disable buttons after answering
function disableButtons(button) {
    const buttons = button.closest('.question').querySelectorAll('.true-false-btn');
    buttons.forEach(btn => {
        btn.disabled = true; // Disable all buttons for this question after selection
    });
}

function checkAnswer4(button, answerText) {
    // The correct answer is "False"
    const correctAnswer = "False";
    
    // Get the answer div for displaying the answer
    const answerDiv = button.closest('.question').querySelector('.answer');
    answerDiv.textContent = `Answer: ${answerText}`;

    // Check which button was clicked and apply the correct styling
    if (button.textContent.trim() === correctAnswer) {
        // If the button labeled 'False' is clicked, it turns green, and 'True' turns red
        button.style.backgroundColor = 'green';
        button.closest('.question').querySelectorAll('.true-false-btn').forEach(btn => {
            if (btn !== button) {
                btn.style.backgroundColor = 'red'; // 'True' button turns red
            }
        });
    } else {
        // If the button labeled 'True' is clicked, it turns red, and 'False' turns green
        button.style.backgroundColor = 'red';
        button.closest('.question').querySelectorAll('.true-false-btn').forEach(btn => {
            if (btn.textContent.trim() === correctAnswer) {
                btn.style.backgroundColor = 'green'; // 'False' button turns green
            }
        });
    }

    disableButtons(button); // Disable all buttons after selection
}

// Disable buttons after answering
function disableButtons(button) {
    const buttons = button.closest('.question').querySelectorAll('.true-false-btn');
    buttons.forEach(btn => {
        btn.disabled = true; // Disable all buttons for this question after selection
    });
}


function showAnswerQ1(button, selectedAnswer) {
    // Correct answer for Question 1
    const correctAnswer = "A"; // The correct answer for question 1

    // Find the parent question container and associated answer div
    const questionContainer = button.closest('.question-container1');
    const answerDiv = questionContainer.querySelector('.answer1');
    
    // Set the answer div ID for this question (answer-1)
    const questionId = answerDiv.id;

    // Check if the selected answer is correct
    const isCorrect = selectedAnswer === correctAnswer;

    // Display the result in the answer div
    answerDiv.textContent = isCorrect
        ? `Correct! Answer: ${selectedAnswer}`
        : `Incorrect. The correct answer is: ${correctAnswer}`;

    // Highlight the correct button
    const buttons = questionContainer.querySelectorAll('.answer-btn');
    buttons.forEach(btn => {
        btn.disabled = true; // Disable all buttons for the question
        if (btn.textContent.startsWith(correctAnswer)) {
            btn.style.backgroundColor = 'green'; // Highlight correct answer in green
        } else {
            btn.style.backgroundColor = 'red'; // Highlight incorrect options in red
        }
    });

    // Reset the buttons and answer after 5 seconds
    setTimeout(() => {
        buttons.forEach(btn => {
            btn.disabled = false; // Enable all buttons again
            btn.style.backgroundColor = ''; // Reset button color
        });
        answerDiv.textContent = ''; // Clear the answer
    }, 5000); // 5000ms = 5 seconds
}


function showAnswerQ2(button, selectedAnswer) {
    // Correct answer for Question 2
    const correctAnswer = "B"; // The correct answer for question 2

    // Find the parent question container and associated answer div
    const questionContainer = button.closest('.question-container2');
    const answerDiv = questionContainer.querySelector('.answer1');
    
    // Set the answer div ID for this question (answer-2)
    const questionId = answerDiv.id;

    // Check if the selected answer is correct
    const isCorrect = selectedAnswer === correctAnswer;

    // Display the result in the answer div
    answerDiv.textContent = isCorrect
        ? `Correct! Answer: ${selectedAnswer}`
        : `Incorrect. The correct answer is: ${correctAnswer}`;

    // Highlight the correct button
    const buttons = questionContainer.querySelectorAll('.answer-btn');
    buttons.forEach(btn => {
        btn.disabled = true; // Disable all buttons for the question
        if (btn.textContent.startsWith(correctAnswer)) {
            btn.style.backgroundColor = 'green'; // Highlight correct answer in green
        } else {
            btn.style.backgroundColor = 'red'; // Highlight incorrect options in red
        }
    });

    // Reset the buttons and answer after 5 seconds
    setTimeout(() => {
        buttons.forEach(btn => {
            btn.disabled = false; // Enable all buttons again
            btn.style.backgroundColor = ''; // Reset button color
        });
        answerDiv.textContent = ''; // Clear the answer
    }, 5000); // 5000ms = 5 seconds
}



function expandContent(contentId) {
    // Get the content box container
    const contentBox = document.getElementById("content-box");
    contentBox.style.display = "block";  // Show the box

    // Hide all content by default
    const allContent = document.querySelectorAll('.content');
    allContent.forEach(content => {
        content.style.display = 'none';
    });

    // Show the content corresponding to the clicked icon
    const selectedContent = document.getElementById(contentId);
    selectedContent.style.display = 'block';
}

function closeContentBox() {
    const contentBox = document.getElementById("content-box");
    contentBox.style.display = "none";  // Hide the box

    // Hide all content and reset
    const allContent = document.querySelectorAll('.content');
    allContent.forEach(content => {
        content.style.display = 'none';
    });
}


















