document.getElementById(
  "navigation1"
).innerHTML = `<nav class="navbar navbar-expand-lg navbar-light d-flex justify-content-between align-items-center mainNavbar">
<div class="container justify-content-between">
    <a class="navbar-brand text-white" href="index.html">E-Market</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
        aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-between align-items-center" id="navbarScroll">
        <div class="d-flex flex-grow-1 justify-content-end align-items-center">
            <form class="d-flex mr-3">
                <input class="form-control rounded-0  flex-grow-1 form-search form-search-input"
                    type="search" placeholder=" Search for the products " aria-label="Search">
                <button class="btn rounded-0 form-search form-search-button bg-warning" type="submit">Search</button>
            </form>
            <div class="nav-item dropdown">
                <a class="nav-link dropdown-toggle text-white" href="#" id="navbarScrollingDropdown"
                    role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    English
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                    <li class=""><a class="dropdown-item " href="#">English</a></li>
                    <li>
                        <hr class="dropdown-divider">
                    </li>
                    <li><a class="dropdown-item" href="#">Arabic</a></li>
                </ul>
            </div>
        </div>
        <ul class="navbar-nav my-2 my-lg-0 navbar-nav-scroll d-flex justify-content-end align-items-center"
            style="--bs-scroll-height: 250px;">
    
                <div class="nav-item dropdown">
                <a class="nav-link dropdown-toggle text-white " href="#" id="navbarScrollingDropdown"
                    role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <span class="px-2">Login</span> <i class="fa-solid fa-user"></i>
                </a>
                <ul class="dropdown-menu " aria-labelledby="navbarScrollingDropdown">
                    <li class=""><a class="dropdown-item " href="userProfile.html">user profile</a></li>
                    <li>
                    <hr class="dropdown-divider">
                    </li>
                    <li><a class="dropdown-item" href="login.html">login/logout</a></li>
                </ul>
                
            </div>
            </li>
            <li class="nav-item">
                <a class="nav-link text-white d-inline-flex" href="#">
                    <span class="px-2">Shopping</span>
                    <i class="fa-solid fa-cart-shopping m-1"></i>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link text-white d-inline-flex" href="#">
                    <span class="px-2">Wishlist</span>
                    <i class="fa-regular fa-heart m-1"></i>
                </a>
            </li>
        </ul>
    </div>
</div>
</nav>`;
