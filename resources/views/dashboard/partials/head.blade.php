<head> 
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<!-- Primary Meta Tags -->
<title>Simple Laravel ReactJs App</title>
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
<meta name="title" content="Simple Laravel ReactJs App">

<link rel="stylesheet" href="{{ asset('css/app.css') }}">
<meta name="csrf-token" content="{{ csrf_token() }}"> 
<meta name="user-api-token" content="{{ Auth::user()->api_token ?? '' }}"> 

</head>