<!DOCTYPE html>
<html lang="ua-UA">

@component('dashboard.partials.head')
@endcomponent

<body>

<nav class="navbar navbar-dark navbar-theme-primary px-4 col-12 d-md-none">
    <a class="navbar-brand mr-lg-5" href="##">
    </a>
    <div class="d-flex align-items-center">
        <button class="navbar-toggler d-md-none collapsed" type="button" data-toggle="collapse" data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
    </div>
</nav>

@component('dashboard.partials.sidebar', ['sites' => $sites ])
@endcomponent
    
<main class="content">
@yield('content')
@component('dashboard.partials.footer')
@endcomponent

</main>

@component('dashboard.partials.scripts')
@endcomponent

</body>

</html>