

$( document ).ready(function() {
    function require(script) {
        $.ajax({
            url: script,
            dataType: "script",
            async: false,           // <-- This is the key
            success: function () {
                console.log('JS loaded successfully')
            },
            error: function () {
                throw new Error("Could not load script " + script);
            }
        });
    }

    require("../ajax-multi-image-uploader/dist/assets/jquery-file-upload/js/vendor/jquery.ui.widget");
    require("../ajax-multi-image-uploader/dist/assets/jquery-file-upload/js/jquery.iframe-transport.js");
    require("../ajax-multi-image-uploader/dist/assets/jquery-file-upload/js/jquery.fileupload.js");
});

