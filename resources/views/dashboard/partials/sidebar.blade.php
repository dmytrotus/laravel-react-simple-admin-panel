<nav id="sidebarMenu" class="sidebar d-md-block bg-primary text-white collapse" data-simplebar>
    <div class="sidebar-inner px-4 pt-3">
      <div class="user-card d-flex d-md-none align-items-center justify-content-between justify-content-md-center pb-4">
        <div class="d-flex align-items-center">
          <div class="user-avatar lg-avatar mr-4">
            
          </div>
          <div class="d-block">
            <h2 class="h6">Hi, Jane</h2>
            <a href="##" class="btn btn-secondary text-dark btn-xs"><span class="mr-2"><span class="fas fa-sign-out-alt"></span></span>Sign Out</a>
          </div>
        </div>
        <div class="collapse-close d-md-none">
            <a href="#sidebarMenu" class="fas fa-times" data-toggle="collapse"
                data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="true"
                aria-label="Toggle navigation"></a>
        </div>
      </div>
      <ul class="nav flex-column">
        @foreach($sites as $site)
        <li class="nav-item">
          <a href="{{ url('admin/site/'.$site->slug) }}" class="nav-link">
            <span class="sidebar-icon">
              <span class="fas fa-chart-pie"></span>
            </span>
            <span>{{ $site->name }}</span>
          </a>
        </li>
        @endforeach
        <li role="separator" class="dropdown-divider mt-4 mb-3 border-black"></li>
        <li class="nav-item">
          <span class="nav-link  collapsed  d-flex justify-content-between align-items-center" data-toggle="collapse" data-target="#submenu-components">
            <span>
              <span class="sidebar-icon"><span class="fas fa-box-open"></span></span> 
              Настройки
            </span>
            <span class="link-arrow"><span class="fas fa-chevron-right"></span></span> 
          </span>
          <div class="multi-level collapse " role="list" id="submenu-components" aria-expanded="false">
              <ul class="flex-column nav">
                  <li class="nav-item ">
                    <a class="nav-link" href="{{ route('add-sites')}}"><span>Сайти</span></a>
                  </li>
              </ul>
          </div>
        </li>

        <li role="separator" class="dropdown-divider mt-4 mb-3 border-black"></li>

        <li class="nav-item text-center">
           <form method="POST" action="{{ route('logout') }}">
              @csrf
              <button type="submit" class="btn btn-sm btn-info">Вилогінитись</button>
          </form>
        </li>

      </ul>
    </div>
</nav>