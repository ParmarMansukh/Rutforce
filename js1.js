
        document.getElementById("homeLink").onclick = function(event) {
            event.preventDefault();
            document.getElementById("homeModal").style.display = "flex";
        };
        document.getElementById("aboutLink").onclick = function(event) {
            event.preventDefault();
            document.getElementById("aboutModal").style.display = "flex";
        };
        document.getElementById("contactLink").onclick = function(event) {
            event.preventDefault();
            document.getElementById("contactModal").style.display = "flex";
        };
        document.querySelectorAll(".close").forEach(button => {
            button.onclick = function() {
                document.querySelectorAll(".modal").forEach(modal => {
                    modal.style.display = "none";
                });
            };
        });
        window.onclick = function(event) {
            if (event.target.classList.contains("modal")) {
                event.target.style.display = "none";
            }
        };
    