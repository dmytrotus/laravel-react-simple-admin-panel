<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{

    public function adminIndex()
    {
        return view('dashboard.layouts.admin');
    }

    public function userIndex()
    {
        return view('dashboard.layouts.user');
    }
}
