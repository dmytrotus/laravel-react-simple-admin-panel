@extends('dashboard.loginlogoutindex')
@section('content')
 <main>

        <!-- Section -->
        <section class="d-flex align-items-center my-5 mt-lg-6 mb-lg-5">
            <div class="container">
                <p class="text-center"><a href="/register" class="text-gray-700">До реєстрації </a></p>
                <div class="row justify-content-center form-bg-image" data-background-lg="../../assets/img/illustrations/signin.svg">
                    <div class="col-12 d-flex align-items-center justify-content-center">
                        <div class="mb-4 mb-lg-0 bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                            <div class="text-center text-md-center mb-4 mt-md-0">
                                <h1 class="mb-0 h3">Залогінься</h1>
                            </div>
                            <form method="POST" action="{{ route('login') }}">
                       			@csrf
                                <!-- Form -->
                                <div class="form-group mb-4">
                                    <label for="email">Твій Email</label>
                                    <div class="input-group">
                                        <span class="input-group-text" id="basic-addon3"><span class="fas fa-envelope"></span></span>
                                        <input placeholder="example@company.com" id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>

		                                @error('email')
		                                    <span class="invalid-feedback" role="alert">
		                                        <strong>{{ $message }}</strong>
		                                    </span>
		                                @enderror

                                    </div>  
                                </div>
                                <!-- End of Form -->
                                <div class="form-group">
                                    <!-- Form -->
                                    <div class="form-group mb-4">
                                        <label for="password">Твій пароль</label>
                                        <div class="input-group">
                                            <span class="input-group-text" id="basic-addon4"><span class="fas fa-unlock-alt"></span></span>
                                            <input id="password" placeholder="Пароль" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="current-password">                                         
                                            @error('password')
                                                <span class="invalid-feedback" role="alert">
                                                    <strong>{{ $message }}</strong>
                                                </span>
                                            @enderror

                                        </div>  
                                    </div>
                                    <!-- End of Form -->

                                </div>
                                <button type="submit" class="btn btn-block btn-primary">Логін</button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
@endsection