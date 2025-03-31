document.addEventListener("DOMContentLoaded", function () {
    const recipeGrid = document.querySelector(".recipe-grid");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    const scrollAmount = 300; // Adjust how much it scrolls per click

    nextBtn.addEventListener("click", function () {
        recipeGrid.scrollLeft += scrollAmount; // Scroll to the right
    });

    prevBtn.addEventListener("click", function () {
        recipeGrid.scrollLeft -= scrollAmount; // Scroll to the left
    });
});





        window.addEventListener('scroll', function() {
            document.querySelector('.navbar').classList.toggle('scrolled', window.scrollY > 50);
        });





function openNav() {
    document.getElementById("sidebar").style.right = "0";
    document.getElementById("overlay").style.opacity = "1";
    document.getElementById("overlay").style.visibility = "visible";
}

function closeNav() {
    document.getElementById("sidebar").style.right = "-300px";
    document.getElementById("overlay").style.opacity = "0";
    document.getElementById("overlay").style.visibility = "hidden";
}




    function scrollToRecentPosts() {
        document.getElementById('recent-posts').scrollIntoView({ behavior: 'smooth' });
    }




        const totalPages = 69;
        let currentPage = 1;

        function generatePagination() {
            const pagesContainer = document.getElementById("pages");
            pagesContainer.innerHTML = "";
            let pages = [];

            if (totalPages <= 10) {
                for (let i = 1; i <= totalPages; i++) pages.push(i);
            } else {
                pages.push(1); // Always show first page

                if (currentPage > 5) {
                    pages.push("...");
                }

                if (currentPage <= 5) {
                    for (let i = 2; i <= 6; i++) pages.push(i);
                } else if (currentPage >= totalPages - 4) {
                    for (let i = totalPages - 5; i < totalPages; i++) pages.push(i);
                } else {
                    for (let i = currentPage - 3; i <= currentPage + 3; i++) pages.push(i);
                }

                if (currentPage < totalPages - 4) {
                    pages.push("...");
                }

                pages.push(totalPages);
            }

            pages.forEach(num => {
                const pageBtn = document.createElement("button");
                pageBtn.classList.add("page");

                if (num === "...") {
                    pageBtn.innerText = "...";
                    pageBtn.disabled = true;
                } else {
                    pageBtn.innerText = num;
                    pageBtn.onclick = () => changePage(num);
                    if (num === currentPage) {
                        pageBtn.classList.add("active");
                    }
                }

                pagesContainer.appendChild(pageBtn);
            });

            document.getElementById("prev").disabled = currentPage === 1;
            document.getElementById("next").disabled = currentPage === totalPages;
        }

        function changePage(page) {
            if (page >= 1 && page <= totalPages) {
                currentPage = page;
                generatePagination();
            }
        }

        document.getElementById("prev").addEventListener("click", () => changePage(currentPage - 1));
        document.getElementById("next").addEventListener("click", () => changePage(currentPage + 1));

        generatePagination();