@extends('dashboard.loginlogoutindex')
@section('content')
 <main>

        <!-- Section -->
        <section class="d-flex align-items-center my-5 mt-lg-6 mb-lg-5">
            <div class="container">
                <p class="text-center"><span class="text-gray-700">Silence is golden </span></p>
                <div class="row justify-content-center form-bg-image" data-background-lg="../../assets/img/illustrations/signin.svg">
                    <div class="col-12 d-flex align-items-center justify-content-center">
                        <div class="mb-4 mb-lg-0 bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                            <div class="text-center text-md-center mb-4 mt-md-0">
                            </div>
                            <form method="POST" action="{{ route('logout') }}">
                       			@csrf
                                <button type="submit" class="btn btn-block btn-primary">Вийти</button>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
@endsection