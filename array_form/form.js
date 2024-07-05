$(document).ready(function () {
    let formCount = 1;
    const maxForms = 4;

    // Function to add a new doctor form
    $('#addDoctorForm').click(function () {
        if (formCount < maxForms) {
            formCount++;
            let formHtml = `
                <div class="doctor-form" id="doctorForm${formCount}">
                    <h4>Doctor ${formCount}</h4>
                    <div class="form-group">
                        <label for="name${formCount}">Name</label>
                        <input type="text" class="form-control" id="name${formCount}" name="name[]">
                    </div>
                    <div class="form-group">
                        <label for="phone${formCount}">Phone</label>
                        <input type="text" class="form-control" id="phone${formCount}" name="phone[]">
                    </div>
                    <div class="form-group">
                        <label for="email${formCount}">Email</label>
                        <input type="email" class="form-control" id="email${formCount}" name="email[]">
                    </div>
                    <div class="form-group">
                        <label for="qualification${formCount}">Qualification</label>
                        <select class="form-control" id="qualification${formCount}" name="qualification[]">
                            <option value="">Select</option>
                            <option value="mbbs">MBBS</option>
                            <option value="bhms">BHMS</option>
                        </select>
                    </div>
                </div>
            `;
            $('#formContainer').append(formHtml);
            // Apply validation rules to all forms
            applyValidationRules();
        } else {
            alert('Maximum of 4 forms allowed.');
        }
    });

    // jQuery Validation rules
    function applyValidationRules() {
        $('#doctorForm').validate({
            rules: {
                'name[]': {
                    required: true,
                    minlength: 3
                },
                'phone[]': {
                    required: true,
                    digits: true,
                    minlength: 10,
                    maxlength: 10
                },
                'email[]': {
                    required: true,
                    email: true
                },
                'qualification[]': {
                    required: true
                }
            },
            messages: {
                'name[]': {
                    required: "Please enter the name",
                    minlength: "Name must be at least 3 characters long"
                },
                'phone[]': {
                    required: "Please enter the phone number",
                    digits: "Please enter only digits",
                    minlength: "Phone number must be 10 digits long",
                    maxlength: "Phone number must be 10 digits long"
                },
                'email[]': {
                    required: "Please enter the email",
                    email: "Please enter a valid email address"
                },
                'qualification[]': {
                    required: "Please select the qualification"
                }
            },
            errorElement: 'span',
            errorPlacement: function (error, element) {
                error.addClass('text-danger');
                element.closest('.form-group').append(error);
            }
        });
    }

    // Initialize validation rules on page load
    applyValidationRules();
});
