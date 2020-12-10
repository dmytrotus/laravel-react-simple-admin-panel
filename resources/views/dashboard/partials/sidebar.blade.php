<nav id="sidebarMenu" class="sidebar d-md-block bg-primary text-white collapse" data-simplebar>
    <div class="sidebar-inner px-4 pt-3">
      <div class="user-card d-flex d-md-none align-items-center justify-content-between justify-content-md-center pb-4">
        <div class="d-flex align-items-center">
          <div class="user-avatar lg-avatar mr-4">
            
          </div>
          <div class="d-block">
            <h2 class="h6">Cześć, {{ Auth::user()->name }}</h2>
          </div>
        </div>
        <div class="collapse-close d-md-none">
            <a href="#sidebarMenu" class="fas fa-times" data-toggle="collapse"
                data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="true"
                aria-label="Toggle navigation"></a>
        </div>
      </div>
      <ul class="nav flex-column">

        <li class="nav-item">
          <a href="{{ url($role.'/projects') }}" class="nav-link">
            <span class="sidebar-icon">
              <span class="fas fa-chart-pie"></span>
            </span>
            <span>Projects</span>
          </a>
        </li>

        <li class="nav-item">
          <a href="{{ url($role.'/tasks') }}" class="nav-link">
            <span class="sidebar-icon">
              <span class="fas fa-chart-pie"></span>
            </span>
            <span>Tasks</span>
          </a>
        </li>

        <li role="separator" class="dropdown-divider mt-4 mb-3 border-black"></li>
        <li class="nav-item text-center">
           <form method="POST" action="{{ route('logout') }}">
              @csrf
              <button type="submit" class="btn btn-sm btn-info">Wyloguj się</button>
          </form>
        </li>

      </ul>
    </div>
</nav>