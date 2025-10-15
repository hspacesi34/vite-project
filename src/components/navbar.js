document.getElementById("navbar").innerHTML=`
<!-- Navbar -->
        <div class="navbar bg-base-100 shadow-lg sticky top-0 z-50">
          <div class="navbar-start">
            <div class="dropdown">
              <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
              </div>
              <ul tabindex="0" class="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                <li><a href="/">Accueil</a></li>
                <li><a>Services</a></li>
                <li><a>À propos</a></li>
                <li><a>Contact</a></li>
              </ul>
            </div>
            <a href="/" id="site-name-navbar" class="btn btn-ghost text-lg sm:text-xl"></a>
          </div>
          <div class="navbar-center hidden lg:flex">
            <ul class="menu menu-horizontal px-1">
              <li><a href="/" class="hover:bg-base-200 transition-colors">Accueil</a></li>
              <li><a href="/src/pages/lessons/" class="hover:bg-base-200 transition-colors">Leçons</a></li>
              <li><a href="/src/pages/exo/" class="hover:bg-base-200 transition-colors">Exercices</a></li>
              <li><a href="/src/pages/tp/" class="hover:bg-base-200 transition-colors">TP</a></li>
              <li><a class="hover:bg-base-200 transition-colors">Contact</a></li>
            </ul>
          </div>
          <div class="navbar-end">
            <a class="btn btn-primary btn-sm sm:btn-md">Connexion</a>
          </div>
        </div>
        <!-- FIN Navbar -->
`