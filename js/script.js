<script>
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".faq-question").forEach(function (button) {
        button.addEventListener("click", function () {
            const faqItem = this.parentElement;
            faqItem.classList.toggle("active");
        });
    })
})
</script>
