$(document).ready(function() {
    $("footer").hide();
    $("#noResultsMsg").hide();
    if (!$(".meme-result").length) {
        $("#noResultsMsg").removeAttr("hidden");
        $("#noResultsMsg").show();
    }
});