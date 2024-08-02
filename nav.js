const hamburger = document.querySelector(".hamburger");
        const line = document.querySelectorAll(".hamburger .line");
        const nav_rwdArea = document.querySelector(".nav_rwdArea");
        const navShop = document.querySelector(".navShop");
        const shop_li = document.getElementById("shop_li");

        hamburger.addEventListener("click", () => {
            line[0].classList.toggle("rotate_l");
            line[1].classList.toggle("d-none");
            line[2].classList.toggle("rotate_r");

            nav_rwdArea.classList.toggle("display");

            setTimeout(()=>{
                nav_rwdArea.classList.toggle("opacity");
            },100);

        })

        

        let navview = true;
        function remove(){
            if(navview){
                navShop.classList.remove("opacity");
                setTimeout(() => {
                    navShop.classList.remove("display");
                },100);
            }
        }
        function add(){
            navShop.classList.add("display");
            setTimeout(() => {
                navShop.classList.add("opacity");
            },300);
        }

        shop_li.addEventListener("mouseenter", () => {
            add();
        });
        shop_li.addEventListener("mouseleave", () => {
            setTimeout(() => {
                remove();
            }, 200);
        });
        navShop.addEventListener("mouseenter", () => {
            navview = false;
        })
        navShop.addEventListener("mouseleave", () => {
            navview = true;
            remove();
        })

        
        for(let i=0;i<=2;i++){
        const col4 = document.querySelectorAll(".navShop .col-4");

        const col4_img = document.querySelectorAll(".navShop .col-4 .img");

        const canvas = document.querySelectorAll('.progressCircle');
        
        const slider = document.querySelectorAll('.progressSlider');

        const navShop_list = document.querySelector(".navShop_list");

        const navarr = document.querySelector(".navarr");

        const ctx = canvas[i].getContext('2d', { antialias: true });

        function drawCircle(percentage) {
            const centerX = canvas[i].width / 2;
            const centerY = canvas[i].height / 2;
            const radius = 40;
            

            ctx.clearRect(0, 0, canvas[i].width, canvas[i].height);

            // 黑
            ctx.beginPath();
            ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
            ctx.strokeStyle = '#6f5158';
            ctx.lineWidth = 4;
            ctx.stroke();

            // 紅
            ctx.beginPath();
            ctx.arc(centerX, centerY, radius, -Math.PI / 2, (percentage / 100) * 2 * Math.PI - Math.PI / 2);
            ctx.strokeStyle = '#ff6e5b';
            ctx.lineWidth = 4;
            ctx.stroke();

            
        }

       
        let circleInterval; // 定義一個變數來存儲 interval

        function startCircle() {
            // 確保在開始新的 interval 前清除舊的
            if (circleInterval) {
                clearInterval(circleInterval);
            }
            
            circleInterval = setInterval(() => {

                if (slider[i].value < 100) {
                    slider[i].value++;
                    drawCircle(slider[i].value);
                } else {
                    clearInterval(circleInterval); // 當達到 100% 時停止
                }
            }, 15);
        }

        col4[i].addEventListener('mouseenter', function() {
            startCircle();
            col4_img[i].classList.add("active");
        });

        col4[i].addEventListener('mouseleave', function() {
            if (circleInterval) {
                clearInterval(circleInterval);
            }
            slider[i].value = 0;
            drawCircle(slider[i].value);
            col4_img[i].classList.remove("active");
        });

        // 初始繪製
        drawCircle(0);

        }


        const nav_user = document.querySelector(".nav_user");
        const user_area = document.querySelector(".user_area");


        nav_user.addEventListener("mouseenter", e => {
            user_area.style.right = "-22px";
            user_area.style.top = "22px";
            user_area.classList.add("active");
        });
        nav_user.addEventListener("mouseleave", e => {
            user_area.classList.remove("active");
        });
        user_area.addEventListener("mouseenter", e => {
            user_area.classList.add("active");
        });
        user_area.addEventListener("mouseleave", e => {
            user_area.classList.remove("active");
        });

        document.addEventListener("click", (e) => {
            if (!user_area.contains(e.target) && !nav_user.contains(e.target)) {
                user_area.classList.remove("active");
            }
        });