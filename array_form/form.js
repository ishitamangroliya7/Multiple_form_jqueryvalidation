 $(document).ready(function () {
                // Initialize form validation on the studentForm element
                $("#studentForm").validate({
                    // Specify validation rules
                    rules: {
                        "name[0]": {
                            required: true,
                            minlength: 2
                        },
                        "phone[0]": {
                            require_from_group: [1, ".phone-group"],
                            minlength: 10
                        },
                        "mobile[0]": {
                            require_from_group: [1, ".phone-group"],
                            minlength: 10
                        },
                        "home[0]": {
                            require_from_group: [1, ".phone-group"],
                            minlength: 10
                        },
                        "email[0]": {
                            required: true,
                            email: true
                        },
                        "qualification[0]": {
                            required: true
                        }
                    },
                    // Specify validation error messages
                    messages: {
                        "name[0]": {
                            required: "Please enter student's name",
                            minlength: "Name must consist of at least 2 characters"
                        },
                        "email[0]": {
                            required: "Please enter email address",
                            email: "Please enter a valid email address"
                        },
                        "qualification[0]": {
                            required: "Please select qualification"
                        }
                    },
                    errorElement: 'div',
                    errorPlacement: function (error, element) {
                        error.addClass('invalid-feedback');
                        element.closest('.form-group').append(error);
                    },
                    highlight: function (element) {
                        $(element).addClass('is-invalid');
                    },
                    unhighlight: function (element) {
                        $(element).removeClass('is-invalid');
                    },
                    invalidHandler: function (event, validator) {
                        console.log(validator.currentElements.prevObject.valid());
                        if (validator.currentElements && validator.currentElements.prevObject)
                            validator.currentElements.prevObject[0].valid();
                    }
                });

                // Add new student form
                $("#addStudentForm").click(function () {
                    var newIndex = $(".student-form").length;
                    var newField = `
                    <hr>
                <div class="student-form pt-2 pb-2" id="studentForm${newIndex + 1}">
                    <h5>Student ${newIndex + 1}</h5>
                    <div class="formrow">
                        <div class="form-group">
                            <label for="name${newIndex + 1}">Name</label>
                            <input type="text" class="form-control" id="name${newIndex + 1}" name="name[${newIndex}]">
                        </div>
                        <div class="form-group">
                            <label for="email${newIndex + 1}">Email</label>
                            <input type="email" class="form-control" id="email${newIndex + 1}" name="email[${newIndex}]">
                        </div>
                        <div class="form-group">
                            <label for="qualification${newIndex + 1}">Qualification</label>
                            <select class="form-control" id="qualification${newIndex + 1}" name="qualification[${newIndex}]">
                                <option value="">Select</option>
                                <option value="graduate">Graduate</option>
                                <option value="postgraduate">Postgraduate</option>
                            </select>
                        </div>
                    </div>
                    <div class="formrow">
                        <div class="form-group">
                            <label for="phone${newIndex + 1}">Phone</label>
                            <input type="text" class="form-control phone-group-${newIndex}" id="phone${newIndex + 1}" name="phone[${newIndex}]">
                        </div>
                        <div class="form-group">
                            <label for="mobile${newIndex + 1}">Mobile</label>
                            <input type="text" class="form-control phone-group-${newIndex}" id="mobile${newIndex + 1}" name="mobile[${newIndex}]">
                        </div>
                        <div class="form-group">
                            <label for="home${newIndex + 1}">Home</label>
                            <input type="text" class="form-control phone-group-${newIndex}" id="home${newIndex + 1}" name="home[${newIndex}]">
                        </div>
                    </div>
                </div>`;

                    $("#formContainer").append(newField);

                    // Add validation rules for new fields
                    $(`[name="name[${newIndex}]"]`).rules("add", {
                        required: true, minlength: 2,
                        messages: {
                            required: "Please enter student's name",
                            minlength: "Name must consist of at least 2 characters"
                        }
                    });
                    $(`[name="phone[${newIndex}]"]`).rules("add", {
                        require_from_group: [1, `.phone-group-${newIndex}`], minlength: 10
                    });
                    $(`[name="mobile[${newIndex}]"]`).rules("add", {
                        require_from_group: [1, `.phone-group-${newIndex}`], minlength: 10
                    });
                    $(`[name="home[${newIndex}]"]`).rules("add", {
                        require_from_group: [1, `.phone-group-${newIndex}`], minlength: 10
                    });
                    $(`[name="email[${newIndex}]"]`).rules("add", {
                        required: true,
                        email: true,
                        messages: {
                            required: "Please enter email address",
                            email: "Please enter a valid email address"
                        }
                    });
                    $(`[name="qualification[${newIndex}]"]`).rules("add", {
                        required: true,
                        messages: {
                            required: "Please select qualification"
                        }
                    });
                });
            });
