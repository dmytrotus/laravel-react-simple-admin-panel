 <nav class="navbar navbar-top navbar-expand navbar-dashboard navbar-dark pl-0 pr-2 pb-0">
    <div class="container-fluid px-0">
      <div class="d-flex justify-content-between w-100" id="navbarSupportedContent">

        <!-- Navbar links -->
        <ul class="navbar-nav align-items-center">
          <li class="nav-item dropdown">
            <a class="nav-link pt-1 px-0" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <div class="media d-flex align-items-center">
                <img class="user-avatar md-avatar rounded-circle" alt="Image placeholder" src="{{ asset('storage/avatar.jpg')}}">
                <div class="media-body ml-2 text-dark align-items-center d-none d-lg-block">
                  <span class="mb-0 font-small font-weight-bold">{{Auth::user()->name}} ({{Auth::user()->role->role_name}})</span>
                </div>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
</nav>