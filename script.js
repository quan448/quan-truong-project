/* ==========================================================================
   1. COMMENT OUT STYLE CŨ CỦA LI (Yêu cầu đề bài)
   ========================================================================== */
/* li { list-style-type: none; } */

/* ==========================================================================
   2. ACCESSIBILITY (Mặc định ẩn Skip Link, nhấn Tab mới hiện)
   ========================================================================== */
.skip-link {
    position: absolute;
    top: -100px;
    left: 10px;
    background: #111;
    color: #fff;
    padding: 10px;
    text-decoration: none;
    z-index: 999;
}
.skip-link:focus {
    top: 10px;
}

/* ==========================================================================
   3. NAV STYLING (Yêu cầu: inline-block và width ~80%)
   ========================================================================== */
nav {
    display: inline-block;
    width: 80%;
    background-color: #f4f4f4; 
    padding: 15px;
    vertical-align: middle;
}

/* Dùng descendent selector style cho cái LOGO GIẢ có width đúng 10% */
nav .mock-img-logo {
    display: inline-block;
    width: 10%; /* Đúng 10% nha ní */
    background-color: #0056b3; 
    color: white;
    text-align: center;
    padding: 8px 0;
    font-weight: bold;
    font-size: 14px;
    vertical-align: middle;
    margin-right: 15px;
}

nav a {
    color: #0056b3;
    text-decoration: none;
    margin-right: 15px;
}

/* ==========================================================================
   4. GRID CLASS STYLING (2 cột, mỗi cột ~40%)
   ========================================================================== */
.grid {
    display: grid;
    grid-template-columns: 40% 40%; /* 2 cột mỗi cột 40% */
    justify-content: space-between; 
    align-items: start;
    row-gap: 25px;
    margin-top: 20px;
}

/* Dùng descendent selector style cho ẢNH GIẢ TRONG GRID rộng 100% */
.grid .mock-img {
    width: 100%; /* Đúng 100% để ôm khít cột 40% */
    height: 150px; 
    background-color: #555; 
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
}

/* ==========================================================================
   5. FLEX CLASS STYLING
   ========================================================================== */
.flex {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around; 
    gap: 15px;
    margin-top: 20px;
}

.flex-item {
    background-color: #e0e0e0;
    color: #1a1a1a;
    padding: 20px;
    min-width: 120px;
    text-align: center;
}

/* ==========================================================================
   6. GLOBAL & COLOR CONTRAST (Bao quét WAVE)
   ========================================================================== */
body {
    font-family: Arial, sans-serif;
    background-color: #ffffff;
    color: #1a1a1a;
    margin: 20px;
}
